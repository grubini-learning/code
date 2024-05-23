# Working with CSV files

## Write

```python
import CSV

with open('data.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(['transaction_id', 'product_id', 'price'])
    writer.writerow([1000, 1, 5])
    writer.writerow([1001, 2, 15])
```

## Read

```python
import CSV

with open('data.csv') as file:
    reader = csv.reader(file)
    # converts all the data in the csv file and converts it into a list
    # list(reader)

    for row in reader:
        print(row)
```
