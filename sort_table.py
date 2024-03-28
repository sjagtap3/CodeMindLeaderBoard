def sort_IER(data):
    pass

def sort_list(data):
    new_list = sorted(data, key=lambda x: x['key1'], reverse=True)
    return new_list

def create_html(data):
    elements_list = []
    for d in data:
        element = ""
        values = []
        for k in d.keys():
            if isinstance(d[k], float):
                values.append(format(d[k], ".2f"))
            else:
                values.append(d[k])
        for v in values:
            element += f"<td>{v}</td>"
        elements_list.append(f"<tr>{element}</tr>")
    return "\n".join(elements_list)
            
        

def main_IER():
    data_mbpp = [
        {
        "name":"GPT-4",
        "key1":80.88
        },
        {
        "name":"GPT-3.5",
        "key1":71.32
        },
        {
        "name":"Magicoder(7B)",
        "key1":59.80
        },
        {
        "name":"DeepSeekCoder-instruct(6.7B)",
        "key1":57.84
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 57.84
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 46.08
        },
        {
        "name": "Llama2(13B)",
        "key1": 45.59
        },
        {
        "name": "StarCoder(15B)",
        "key1": 43.63
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 42.20
        },
        {
        "name": "Mistral(7B)",
        "key1": 31.37
        }    
    ]
    
    data_humaneval = [
        {
        "name":"GPT-4",
        "key1":79.01
        },
        {
        "name":"GPT-3.5",
        "key1":64.20
        },
        {
        "name":"Llama2(13B)",
        "key1":30.86
        },
        {
        "name":"Mistral(7B)",
        "key1":32.72
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":45.06
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":41.98
        },
        {
        "name": "Magicoder(7B)",
        "key1":52.47
        },
        {
        "name": "StarCoder(15B)",
        "key1":38.89
        },
        {
        "name": "StarCoder2(15B)",
        "key1":46.30
        },
        {
        "name": "WizardCoder(15B)",
        "key1":40.12
        }    
    ]
    data_cruxeval = [
        {
        "name":"GPT-4",
        "key1":80.50
        },
        {
        "name":"GPT-3.5",
        "key1":65.13
        },
        {
        "name":"Llama2(13B)",
        "key1":25.38
        },
        {
        "name":"Mistral(7B)",
        "key1":34.13
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":37.75
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":44.38
        },
        {
        "name": "Magicoder(7B)",
        "key1":46.50
        },
        {
        "name": "StarCoder(15B)",
        "key1":35.50
        },
        {
        "name": "StarCoder2(15B)",
        "key1":52.00
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 35.88
        }    
    ]
    data_codenet_py = [
        {
        "name":"GPT-4",
        "key1":70.43
        },
        {
        "name":"GPT-3.5",
        "key1":49.06
        },
        {
        "name":"Llama2(13B)",
        "key1":18.97
        },
        {
        "name":"Mistral(7B)",
        "key1":17.35
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":27.95
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":26.65
        },
        {
        "name": "Magicoder(7B)",
        "key1":33.28
        },
        {
        "name": "StarCoder(15B)",
        "key1":26.28
        },
        {
        "name": "StarCoder2(15B)",
        "key1":43.22
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 24.87
        }    
    ]
    data_codenet_java = [
        {
        "name":"GPT-4",
        "key1":71.17
        },
        {
        "name":"GPT-3.5",
        "key1":51.93
        },
        {
        "name":"Llama2(13B)",
        "key1":23.99
        },
        {
        "name":"Mistral(7B)",
        "key1":18.15
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":28.52
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":32.13
        },
        {
        "name": "Magicoder(7B)",
        "key1":36.46
        },
        {
        "name": "StarCoder(15B)",
        "key1":29.34
        },
        {
        "name": "StarCoder2(15B)",
        "key1":32.50
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 29.36
        }    
    ]
    data_avatar_python = [
        {
        "name":"GPT-4",
        "key1":52.33
        },
        {
        "name":"GPT-3.5",
        "key1":39.53
        },
        {
        "name":"Llama2(13B)",
        "key1":24.42
        },
        {
        "name":"Mistral(7B)",
        "key1":16.28
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":23.26
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":18.60
        },
        {
        "name": "Magicoder(7B)",
        "key1":24.42
        },
        {
        "name": "StarCoder(15B)",
        "key1":19.77
        },
        {
        "name": "StarCoder2(15B)",
        "key1":32.56
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 24.42
        }    
    ]
    data_avatar_java = [
        {
        "name":"GPT-4",
        "key1":48.84
        },
        {
        "name":"GPT-3.5",
        "key1":34.88
        },
        {
        "name":"Llama2(13B)",
        "key1":23.26
        },
        {
        "name":"Mistral(7B)",
        "key1":11.63
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1":27.91
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1":23.26
        },
        {
        "name": "Magicoder(7B)",
        "key1":24.42
        },
        {
        "name": "StarCoder(15B)",
        "key1":13.95
        },
        {
        "name": "StarCoder2(15B)",
        "key1":27.91
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 13.95
        }    
    ]
    sorted_list = sort_list(data_avatar_java)
    string_html = create_html(sorted_list)
    print(string_html)

def main_DER():
    data_syn_mbpp = [
        {
        "name":"GPT-4",
        "key1": 86.52,
        "key2": 82.62
        },
        {
        "name":"GPT-3.5",
        "key1": 80.39,
        "key2": 79.20
        },
        {
        "name":"Mistral(7B)",
        "key1":43.36,
        "key2": 43.50
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 56.86,
        "key2": 43.53
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 72.30,
        "key2": 69.39
        },
        {
        "name": "Magicoder(7B)",
        "key1": 70.34,
        "key2": 69.34
        },
        {
        "name": "StarCoder(15B)",
        "key1": 44.85,
        "key2": 56.83
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 61.12,
        "key2": 63.49
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 61.03,
        "key2": 48.19
        }    
    ]
    data_syn_heval = [
        {
        "name":"GPT-4",
        "key1": 79.63,
        "key2": 81.40
        },
        {
        "name":"GPT-3.5",
        "key1": 69.75,
        "key2": 74.63
        },
        {
        "name":"Mistral(7B)",
        "key1": 29.94,
        "key2": 34.12
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 43.11,
        "key2": 35.09
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 72.46,
        "key2": 54.55
        },
        {
        "name": "Magicoder(7B)",
        "key1": 70.37,
        "key2": 57.58
        },
        {
        "name": "StarCoder(15B)",
        "key1": 41.98,
        "key2": 58.07
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 45.06,
        "key2": 45.45
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 51.50,
        "key2": 59.50
        }    
    ]
    data_trans_avatar_py_java =[
        {
        "name":"GPT-4",
        "key1": 55.81,
        "key2": 72.92
        },
        {
        "name":"GPT-3.5",
        "key1": 51.16,
        "key2": 59.09
        },
        {
        "name":"Mistral(7B)",
        "key1": 22.09,
        "key2": 21.05
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 36.05,
        "key2": 29.03
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 52.33,
        "key2": 35.56
        },
        {
        "name": "Magicoder(7B)",
        "key1": 50.00,
        "key2": 37.21
        },
        {
        "name": "StarCoder(15B)",
        "key1": 23.26,
        "key2": 20.59
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 60.47,
        "key2": 37.50
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 39.53,
        "key2": 20.59
        }    
    ]
    data_trans_avatar_java_python =[
        {
        "name":"GPT-4",
        "key1": 56.98,
        "key2": 59.18
        },
        {
        "name":"GPT-3.5",
        "key1": 68.60,
        "key2": 49.15
        },
        {
        "name":"Mistral(7B)",
        "key1": 30.23,
        "key2": 15.38
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 58.14,
        "key2": 22.00
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 55.81,
        "key2": 25.00
        },
        {
        "name": "Magicoder(7B)",
        "key1": 65.12,
        "key2": 28.57
        },
        {
        "name": "StarCoder(15B)",
        "key1": 39.53,
        "key2": 30.00
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 19.60,
        "key2": 40.38
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 0,
        "key2": "-"
        }    
    ] 
    data_trans_codenet_python_java =[
        {
        "name":"GPT-4",
        "key1": 74.85,
        "key2": 82.03
        },
        {
        "name":"GPT-3.5",
        "key1": 70.32,
        "key2": 62.42
        },
        {
        "name":"Mistral(7B)",
        "key1": 35.13,
        "key2": 41.73
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 45.18,
        "key2": 45.81
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 69.59,
        "key2": 30.72
        },
        {
        "name": "Magicoder(7B)",
        "key1": 69.44,
        "key2": 42.11
        },
        {
        "name": "StarCoder(15B)",
        "key1": 47.51,
        "key2": 37.23
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 26.02,
        "key2": 38.76
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 55.41,
        "key2": 41.42
        }    
    ]
    data_trans_codenet_java_python =[
        {
        "name":"GPT-4",
        "key1": 51.66,
        "key2": 73.67
        },
        {
        "name":"GPT-3.5",
        "key1": 52.53,
        "key2": 60.06
        },
        {
        "name":"Mistral(7B)",
        "key1": 24.46,
        "key2": 26.63
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 37.02,
        "key2": 40.56
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 44.28,
        "key2": 35.62
        },
        {
        "name": "Magicoder(7B)",
        "key1": 45.73,
        "key2": 47.46
        },
        {
        "name": "StarCoder(15B)",
        "key1": 6.95,
        "key2": 40.82
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 38.78,
        "key2": 54.65
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 2.03,
        "key2": 21.43
        }    
    ]    
    sorted_list = sort_list(data_trans_codenet_java_python)
    string_html = create_html(sorted_list)
    print(string_html) 

def main_SR():
    data_sr_mbpp = [
        {
        "name":"GPT-4",
        "key1": 90.59,
        "key2": 72.13,
        "key3": 14.22
        },
        {
        "name":"GPT-3.5",
        "key1": 85.05,
        "key2": 78.87,
        "key3": 12.99
        },
        {
        "name":"Mistral(7B)",
        "key1": 50.74,
        "key2": 48.28,
        "key3": 8.58
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 63.73,
        "key2": 53.68,
        "key3": 10.54
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 78.68,
        "key2": 67.65,
        "key3": 12.01
        },
        {
        "name": "Magicoder(7B)",
        "key1": 75.25,
        "key2": 69.61,
        "key3": 9.30
        },
        {
        "name": "StarCoder(15B)",
        "key1": 51.47,
        "key2": 41.67,
        "key3": 10.78
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 66.98,
        "key2": 54.80,
        "key3": 11.52
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 67.89,
        "key2": 52.21,
        "key3": 12.25
        }         
    ]
    
  
    data_sr_humaneval = [
        {
        "name":"GPT-4",
        "key1": 91.98,
        "key2": 88.27,
        "key3": 17.28
        },
        {
        "name":"GPT-3.5",
        "key1": 85.05,
        "key2": 78.87,
        "key3": 12.99
        },
        {
        "name":"Mistral(7B)",
        "key1": 74.07,
        "key2": 70.37,
        "key3": 16.67
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 57.41,
        "key2": 54.32,
        "key3": 9.58
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 87.04,
        "key2": 82.10,
        "key3": 12.96
        },
        {
        "name": "Magicoder(7B)",
        "key1": 81.48,
        "key2": 80.86,
        "key3": 17.90
        },
        {
        "name": "StarCoder(15B)",
        "key1": 56.17,
        "key2": 38.89,
        "key3": 15.43
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 58.64,
        "key2": 41.46,
        "key3": 12.96
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 76.54,
        "key2": 76.54,
        "key3": 17.28
        }          
    ]
    
    data_sr_avatar_py_java = [
        {
        "name":"GPT-4",
        "key1": 78.75,
        "key2": 68.60,
        "key3": 4.65
        },
        {
        "name":"GPT-3.5",
        "key1": 75.00,
        "key2": 62.79,
        "key3": 3.49
        },
        {
        "name":"Mistral(7B)",
        "key1": 35.00,
        "key2": 29.07,
        "key3": 2.33
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 45.00,
        "key2": 43.02,
        "key3": 2.33
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 78.75,
        "key2": 65.12,
        "key3": 3.49
        },
        {
        "name": "Magicoder(7B)",
        "key1": 70.00,
        "key2": 63.95,
        "key3": 3.49
        },
        {
        "name": "StarCoder(15B)",
        "key1": 53.75,
        "key2": 51.16,
        "key3": 3.49
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 43.75,
        "key2": 23.26,
        "key3": 1.16
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 55.00,
        "key2": 46.51,
        "key3": 3.49
        }          
    ]
        
    data_sr_avatar_java_py = [
        {
        "name":"GPT-4",
        "key1": 82.72,
        "key2": 62.79,
        "key3": 4.65
        },
        {
        "name":"GPT-3.5",
        "key1": 88.89,
        "key2": 74.42,
        "key3": 1.16
        },
        {
        "name":"Mistral(7B)",
        "key1": 49.38,
        "key2": 34.88,
        "key3": 1.16
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 64.20,
        "key2": 66.28,
        "key3": 2.33
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 77.78,
        "key2": 61.63,
        "key3": 2.33
        },
        {
        "name": "Magicoder(7B)",
        "key1": 86.42,
        "key2": 72.09,
        "key3": 3.49
        },
        {
        "name": "StarCoder(15B)",
        "key1": 64.20,
        "key2": 25.58,
        "key3": 2.33
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 74.07,
        "key2": 66.28,
        "key3": 2.33
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 29.63,
        "key2": 3.49,
        "key3": 0
        }          
    ]
    data_sr_codenet_py_java = [
        {
        "name":"GPT-4",
        "key1": 72.20,
        "key2": 74.85,
        "key3": 4.63
        },
        {
        "name":"GPT-3.5",
        "key1": 74.71,
        "key2": 70.32,
        "key3": 3.62
        },
        {
        "name":"Mistral(7B)",
        "key1": 41.67,
        "key2": 37.13,
        "key3": 2.32
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 45.91,
        "key2": 45.18,
        "key3": 2.02
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 72.51,
        "key2": 69.59,
        "key3": 3.18
        },
        {
        "name": "Magicoder(7B)",
        "key1": 61.11,
        "key2": 69.44,
        "key3": 3.04
        },
        {
        "name": "StarCoder(15B)",
        "key1": 48.39,
        "key2": 47.51,
        "key3": 2.75
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 47.81,
        "key2": 26.02,
        "key3": 2.32
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 56.14,
        "key2": 55.41,
        "key3": 5.20
        }          
    ]
    data_sr_codenet_java_py = [
        {
        "name":"GPT-4",
        "key1": 82.05,
        "key2": 51.66,
        "key3": 4.49
        },
        {
        "name":"GPT-3.5",
        "key1": 74.38,
        "key2": 52.52,
        "key3": 4.20
        },
        {
        "name":"Mistral(7B)",
        "key1": 34.44,
        "key2": 24.46,
        "key3": 1.45
        },
        {
        "name": "CodeLlama-instruct(13B)",
        "key1": 37.19,
        "key2": 37.05,
        "key3": 2.17
        },
        {
        "name": "DeepSeekCoder-instruct(6.7B)",
        "key1": 60.20,
        "key2": 44.28,
        "key3": 3.47
        },
        {
        "name": "Magicoder(7B)",
        "key1": 62.52,
        "key2": 45.73,
        "key3": 4.05
        },
        {
        "name": "StarCoder(15B)",
        "key1": 36.47,
        "key2": 6.95,
        "key3": 0
        },
        {
        "name": "StarCoder2(15B)",
        "key1": 53.98,
        "key2": 38.78,
        "key3": 3.62
        },
        {
        "name": "WizardCoder(15B)",
        "key1": 10.13,
        "key2": 2.03,
        "key3": 0.14
        }          
    ]
    sorted_list = sort_list(data_sr_codenet_java_py)
    string_html = create_html(sorted_list)
    print(string_html) 
if __name__ == "__main__":
    # print("hello")
    main_SR()