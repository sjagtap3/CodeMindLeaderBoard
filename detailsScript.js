var selectedDataset = "ier";

function filterDropdowns()
{
    fetchData().then(data => {
        let datasetData = data[0];
        processData(datasetData);
    });
}

// Fetch the data
function fetchData() {
    if (selectedDataset == "ier") {
        return Promise.all([
            fetch('task1/dataset.json').then(response => response.json()),
            fetch('task1/ier_data.json').then(response => response.json())
        ]).catch(err => console.error("Error:", err));
    }
    else if (selectedDataset == "der") {
        return Promise.all([
            fetch('task2/dataset_synthesis.json').then(response => response.json()),
            fetch('task2/der_data.json').then(response => response.json())
        ]).catch(err => console.error("Error:", err));
    }
    else if (selectedDataset == "sr") {
        return Promise.all([
            fetch('task3/dataset.json').then(response => response.json()),
            fetch('task3/sr_data.json').then(response => response.json())
        ]).catch(err => console.error("Error:", err));
    }
}

// Process the data
function processData(data) {
    // Parse the JSON data
    let parsedData = data;

    // Get the datasets and problem ids
    let datasets = Object.keys(parsedData);
    console.log(datasets);

   populateDatasetDropdown(datasets);
    
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
            populateDetailsTable(dataset, problemId);
        }
    });
}

// Function to populate the dataset dropdown
function populateDatasetDropdown(datasets) {
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
function populateProblemIdDropdown(problemIds, selectedD) {
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
    problemIds[selectedD].forEach(problemId => {
        let option = document.createElement('option');
        option.text = problemId;
        option.value = problemId;
        problemIdDropdown.add(option);
    });

    // Set the default option as selected
    problemIdDropdown.value = '';

    // Show the problem id dropdown
    problemIdDropdown.style.display = 'inline';
    document.getElementById('problemIdDropdownLabel').style.display = 'block !important';
}


function populateDetailsTable(dataset, problemId) {
    // Fetch the data
    if(selectedDataset == "ier") {
        fetchData().then(data => {
            // Get the code and actual input for the selected problem id
            let code = data[0][dataset][problemId]['code'];
            let input = data[0][dataset][problemId]['code_input'];
            let groundTruth = data["ChatGPT_3.5"]?.[dataset][problemId]['ground_truth'] ?? 'Not Available';
    
    
            let table = `
            <div style="justify-content: center;">
                <table style="border: 1px solid black; text-align: center;">
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
                </table>
            </div>`;
    
            // Insert the table into the div
            document.getElementById('detailsTable').innerHTML = table;
            populateIerModelResults(dataset, problemId);
        });
    }
    else if(selectedDataset == "der") {
        fetchData().then(data => {
            // Get the code and actual input for the selected problem id
            let f1 = data[0][dataset][problemId]['nl'];
            let f2 = data[0][dataset][problemId]['asserts'];
            let f3 = data[0][dataset][problemId]['input_reasoning'];
            let f4 = data[0][dataset][problemId]['output_reasoning'];

            let groundTruth = data["ChatGPT_3.5"]?.[dataset][problemId]['ground-truth'] ?? 'Not Available';


            let table = `
            <div style="justify-content: center;">
                <table style="border: 1px solid black; text-align: center;">
                    <tr>
                        <th style="border: 1px solid black; text-align: left; padding: 10px;">NL:</th>
                        <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${f1}</pre></td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid black; text-align: left; padding: 10px;">Asserts:</th>
                        <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${f2}</pre></td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid black; text-align: left; padding: 10px;">Input reasoning:</th>
                        <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${f3}</pre></td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid black; text-align: left; padding: 10px;">Output reasoning:</th>
                        <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${f4}</pre></td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid black; text-align: left; padding: 10px;">Expected Output:</th>
                        <td style="border: 1px solid black; text-align: left; padding: 10px;"><pre>${groundTruth}</pre></td>
                    </tr>
                </table>
            </div>`;

            // Insert the table into the div
            document.getElementById('detailsTable').innerHTML = table;
            populateDerModelResults(dataset, problemId);
        });
    }
}


function populateIerModelResults(dataset, problemId) {
    // Fetch the data
    fetchData().then(data => {
        document.getElementById('modelResults').innerHTML = '';

        // Get the problem details for the selected problem id
        let models = Object.keys(data[1]);

        // Initialize the HTML string with table headers
        let html = '';

        // Add a textbox and a table for each model
        models.forEach(model => {
            if (model == null || model=='') {
                return;
            }
            let details = data[1][model][dataset][problemId];
            let color = details['label'] === 1 ? 'green' : 'red';

            let reasoning = details['reasoning'] || 'Not Available';
            let output = details['output'] || 'Not Available';

            html += `
            <label style="background-color: ${color}; width: 100%; display: block; margin-bottom: 10px; color:white;">${model}</label>
                <table>
                    <tbody>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Reasoning</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${reasoning}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Predicted Output</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${output}</td>
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

function populateDerModelResults(dataset, problemId) {
    // Fetch the data
    fetchData().then(data => {
        document.getElementById('modelResults').innerHTML = '';

        // Get the problem details for the selected problem id
        let models = Object.keys(data[1]);

        // Initialize the HTML string with table headers
        let html = '';

        // Add a textbox and a table for each model
        models.forEach(model => {
            if (model == null || model=='') {
                return;
            }
            let details = data[1][model][dataset][problemId];

            let color = 'orange';
            if (details['label'] === 1) {
                color = 'orange';
            }
            else if (details['label'] === 0) {
                color = 'red';
            }
            else if (details['label'] === 2) {
                color = 'green';
            }

            let reasoning = details?.['reasoning'] ?? 'Not Available';
            let output = details?.['output'] ?? 'Not Available';
            let synthesized_code = details?.['synthesized_code'] ?? 'Not Available';

            html += `
            <label style="background-color: ${color}; width: 100%; display: block; margin-bottom: 10px; color:white;">${model}</label>
                <table>
                    <tbody>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Reasoning</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${reasoning}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Predicted Output</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${output}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid black; text-align: left; padding: 10px;">Synthesized Code</th>
                            <td style="border: 1px solid black; text-align: left; padding: 10px;">${synthesized_code}</td>
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


// // Common function to generate HTML for model results
// function generateModelResultsHTML(data, dataset, problemId, getColor, additionalRows = '') {
//     let models = Object.keys(data[1]);
//     let html = '';

//     models.forEach(model => {
//         if (model == null || model == '') {
//             return;
//         }
//         let details = data[1][model][dataset][problemId];
//         let color = getColor(details); // Determine color using passed function

//         let reasoning = details['reasoning'] || 'Not Available';
//         let output = details['output'] || 'Not Available';

//         html += `
//         <label style="background-color: ${color}; width: 100%; display: block; margin-bottom: 10px; color:white;">${model}</label>
//             <table>
//                 <tbody>
//                     <tr>
//                         <th style="border: 1px solid black; text-align: left; padding: 10px;">Reasoning</th>
//                         <td style="border: 1px solid black; text-align: left; padding: 10px;">${reasoning}</td>
//                     </tr>
//                     <tr>
//                         <th style="border: 1px solid black; text-align: left; padding: 10px;">Predicted Output</th>
//                         <td style="border: 1px solid black; text-align: left; padding: 10px;">${output}</td>
//                     </tr>
//                     ${additionalRows}
//                 </tbody>
//             </table>
//             <br>
//         `;
//     });

//     return html;
// }


// function populateIerModelResults(dataset, problemId) {
//     fetchData().then(data => {
//         document.getElementById('modelResults').innerHTML = '';
//         let getColor = (details) => details['label'] === 1 ? 'green' : 'red';
//         let html = generateModelResultsHTML(data, dataset, problemId, getColor);
//         document.getElementById('modelResults').innerHTML = html;
//     }).catch(err => console.error("Error:", err));
// }


// function populateDerModelResults(dataset, problemId) {
//     fetchData().then(data => {
//         document.getElementById('modelResults').innerHTML = '';
//         let getColor = (details) => {
//             if (details['label'] === 1) return 'orange';
//             else if (details['label'] === 0) return 'red';
//             else if (details['label'] === 2) return 'green';
//         };
//         let additionalRows = (details) => `
//             <tr>
//                 <th style="border: 1px solid black; text-align: left; padding: 10px;">Synthesized Code</th>
//                 <td style="border: 1px solid black; text-align: left; padding: 10px;">${details['synthesized_code'] || 'Not Available'}</td>
//             </tr>
//         `;
//         let html = generateModelResultsHTML(data, dataset, problemId, getColor, additionalRows(data[1][Object.keys(data[1])[0]][dataset][problemId]));
//         document.getElementById('modelResults').innerHTML = html;
//     }).catch(err => console.error("Error:", err));
// }