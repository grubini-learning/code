from pprint import pprint


def sum():
    first = input("First: ")
    second = input("Second: ")
    result = str(float(first) + float(second))

    print(result)


def weight():
    wght = float(input('Weight: '))
    option = input('(K)g or (L)bs: ')
    unit = 'Lbs'

    if option.upper() == 'K':
        wght = wght / 0.45
        unit = 'Kg'
    else:
        wght = wght * 0.45

    print(f'Weight in {unit}: {str(wght)}')


def even_numbers():
    count = 0
    for i in range(1, 10):
        if (i % 2 == 0):
            count += 1
            print('the i is: ', i)
    print(f"We have {count} even numbers")


def fizz_buzz(input):
    if input >= 15 and input % 3 == 0 and input % 5 == 0:
        return "FizzBuzz"

    if input % 3 == 0:
        return "Fizz"

    if input % 5 == 0:
        return "Buzz"

    return input


def most_repeated_character(text):
    # ideas
    #   - we can set it into a dictionary
    #       - loop through dict looking for the max
    #   - if we loop sequentially for every letter, this can exponentially increase the big O

    # first we need to create a dict
    # second - loop through string
    #   - when we are looping we should be asking if the letter exists and if it does we add one to its occurrence
    dict = {}

    for letter in text:
        if letter == " ":
            continue

        if letter in dict:
            dict[letter] += 1
        else:
            dict[letter] = 1

    # look through the dictionary for the max
    #   create a variable max at 0
    # loop through the values changing the max
    # maxSet = (0, 0)
    # for char, times in dict.items():
    #     if times > maxSet[1]:
    #         maxSet = char, times

    # pprint(f'the max is {maxSet}')
    return sorted(
        dict.items(),
        key=lambda kv: kv[1],
        reverse=True)[0]


try:
    age = int(input("Age: "))
except ValueError as ex:
    print('You did not enter a valid age.')
    print(ex)
else:
    print("This runs when the try block was successful")
