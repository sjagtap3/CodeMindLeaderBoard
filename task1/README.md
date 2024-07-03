### Task 1
#### Data

ier_data.json
```
--'MODEL_1':{
|    'DATASET_1' : {
|        'Problem_1': {
|            'label': 0/1, ## 1 if output is exactly the same as the ground-truth, otherwise 0.
|           'reasoning': 'xxxxxxxxx',
|            'output': 'xxxx',
|            'ground_truth': 'xxxxxxx'
|        },
|       'Problem_2': {
|        'label': '',
|        'reasoning': '',
|        'output': '',
|        'ground-truth': ''
|       },
        ......
|    },
|   'DATASET_2': {
|       'Problem_1': { ....},
|        ......
|       'Problem_N': {....}
|   }
| },
--'MODEL_2': {
|    'DATASET_1': {
|        'Problem_1': {},
|        'Problem_2': {},
|        .......,
|        'Problem_N': {}
|    },
|    'DATASET_2': {
|        'Problem_1': {},
|        'Problem_2': {},
|        .......,
|        'Problem_N': {}
|    }
|......
|  },
.......

```
dataset.json

```
{
    'DATASET_1':{
        'Problem_1': {'code': xxxx, 'code_input':xxx},
        ......
        'Problem_N': {'code': xxxx, 'code_input':xxx}
    }
    ....
        'DATASET_1':{
        'Problem_1': {'code': xxxx, 'code_input':xxx},
        ......
        'Problem_N': {'code': xxxx, 'code_input':xxx}
    }
}
```

### Todos
#### Step 1. Add a button to navigate to the new page to present detailed results.
#### Step 2. Using dropdowns to select model and dataset (Similar to the homepage). 
#### Step 3. Present results.
For each example, we need to present the following information:  
[Code]   (from dataset.json)  
[INPUT]  (from dataset.json)  
[REASONING_PROCESS]  (from ier_data.json)  
[PREDICTED OUTPUT]  (from ier_data.json)  
[GROUND-TRUTH]  (from ier_data.json)

Similar to https://crux-eval.github.io/demo.html

[NOTE] Please consider how to maintain this page: we will add results of new models by updating ier_data.json.
[NOTE]