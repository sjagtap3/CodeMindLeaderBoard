function filterDropdowns()
{
    fetchData().then(data => {
        let datasetData = data[0];
        let ier = data[1];
        processData(datasetData, ier);
    });
}

// Fetch the data
// function fetchData() {
//     return fetch('task1/dataset.json')
//         .then(response => response.json())
//         .catch(err => console.error("Error:", err));
// }

// Fetch the data
function fetchData() {
    return Promise.all([
        fetch('task1/dataset.json').then(response => response.json()),
        fetch('task1/ier_data.json').then(response => response.json())
    ]).catch(err => console.error("Error:", err));
}

// Process the data
function processData(data, ier) {
    // Parse the JSON data
    let parsedData = data;
    let ierData = ier;

    // Get the datasets and problem ids
    let datasets = Object.keys(parsedData);
    console.log(datasets);

   populatedatasetDropdown(datasets);
    
    let problemIds = {};
    // Populate the problemIds object
    datasets.forEach(dataset => {
        problemIds[dataset] = Object.keys(parsedData[dataset]);
    });
    console.log(problemIds);

    // Add an event listener to the dataset dropdown
    document.getElementById('datasetDropdown').addEventListener('change', function() {
        console.log('Dataset selected:', this.value);
        populateProblemIdDropdown(problemIds, this.value);
    });

    document.getElementById('problemIdDropdown').addEventListener('change', function() {
        let dataset = document.getElementById('datasetDropdown').value;
        let problemId = this.value;
    
        if (dataset && problemId) {
            populateDetailsTable(dataset, problemId, ierData);
        }
    });
}

// Function to populate the dataset dropdown
function populatedatasetDropdown(datasets) {
    let datasetDropdown = document.getElementById('datasetDropdown');

        // Clear the dropdown
    while (datasetDropdown.firstChild) {
        datasetDropdown.removeChild(datasetDropdown.firstChild);        
    }

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select a dataset';
    defaultOption.value = '';
    datasetDropdown.add(defaultOption);

    datasets.forEach(dataset => {
        let option = document.createElement('option');
        option.text = dataset;
        option.value = dataset;
        datasetDropdown.add(option);
    });

    datasetDropdown.value = '';
}

// Function to populate the problem id dropdown
function populateProblemIdDropdown(problemIds, selectedDataset) {
    let problemIdDropdown = document.getElementById('problemIdDropdown');

    // Clear the dropdown
    while (problemIdDropdown.firstChild) {
        problemIdDropdown.removeChild(problemIdDropdown.firstChild);
    }

    // Add a default option
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select a problem id';
    defaultOption.value = '';
    problemIdDropdown.add(defaultOption);

    // Add the problem ids
    problemIds[selectedDataset].forEach(problemId => {
        let option = document.createElement('option');
        option.text = problemId;
        option.value = problemId;
        problemIdDropdown.add(option);
    });

    // Set the default option as selected
    problemIdDropdown.value = '';

    // Show the problem id dropdown
    problemIdDropdown.style.display = 'inline';
    document.getElementById('problemIdDropdownLabel').style.display = 'inline';
}

function populateDetailsTable(dataset, problemId, ierData) {
    // Fetch the data
    fetchData().then(data => {
        // Get the code and actual input for the selected problem id
        let code = data[0][dataset][problemId]['code'];
        let input = data[0][dataset][problemId]['code_input'];
        let groundTruth = ierData["ChatGPT_3.5"][dataset][problemId]['ground_truth'];


        let table = `<table style="border: 1px solid black; text-align: left;">
            <tr>
                <th style="border: 1px solid black; text-align: left; padding: 10px;">Code:</th>
                <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${code}</pre></td>
            </tr>
            <tr>
                <th style="border: 1px solid black; text-align: left; padding: 10px;">Input:</th>
                <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${input}</pre></td>
            </tr>
            <tr>
                <th style="border: 1px solid black; text-align: left; padding: 10px;">Expected Output:</th>
                <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${groundTruth}</pre></td>
            </tr>
        </table>`;

        // Insert the table into the div
        document.getElementById('detailsTable').innerHTML = table;
        populateModelResults(dataset, problemId);
    });
}

function populateModelResults(dataset, problemId) {
    // Fetch the data
    fetchData().then(data => {
        // Get the problem details for the selected problem id
        let models = Object.keys(data[1]);

        // Initialize the HTML string with table headers
        let html = '';

        // Add a textbox and a table for each model
        models.forEach(model => {
            let details = data[1][model][dataset][problemId];
            let color = details['label'] === 1 ? 'green' : 'red';
            html += `
            <label style="background-color: ${color}; width: 100%; display: block; margin-bottom: 10px; color:white;">${model}</label>
                <table>
                    <tbody>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Reasoning</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${details['reasoning']}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Predicted Output</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${details['output']}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
            `;
        });

        // Insert the HTML into the div
        document.getElementById('modelResults').innerHTML = html;
    }).catch(err => console.error("Error:", err));
}