function filterDropdowns()
{
    fetchData().then(processData);
}

// Fetch the data
function fetchData() {
    return fetch('task1/dataset.json')
        .then(response => response.json())
        .catch(err => console.error("Error:", err));
}

// Process the data
function processData(data) {
    // Parse the JSON data
    let parsedData = data;

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