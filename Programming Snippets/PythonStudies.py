# The hashtag is used to add comments. 

# Variable Example.
my_name = "Daniel Thomson"

# How to print to the console. 
print("Hello and welcome " + my_name + "!")


an_int = 2 #Intagers do not have any additional numbers.
a_float = 2.1 #A Float has numbers after the variable is created. 
 

# Below would be an example of 6 squared. 

print(6 ** 2)

# Modular displays the remaineder. 7 % 2 = 1


# += can be used to update a variable.
total_price += nice_sweater + fun_books

# Below is an example of how you get a user to add an input to set a varianble in python. 

likes_snakes = input("Do you like snakes? ")

# Boolean Expressions = Statement that can be true or false. 

# Equals: == 
# Not equals: !=

#type(my_baby_bool) = type is used to check the type of variable. Str/Int/Etc. 

# Example of an If statement 
if user_name == "Dave":
  print("Get off my computer Dave!")

#Boolean Operators: and, or, not.

#And example
credits = 120
gpa = 3.4

if credits >= 120 and gpa >= 2.0:
  print("You meet the requirements to graduate!")


#Or example 
if credits >= 120 or gpa >= 2.0:
  print("You meet the requirements to graduate!")

#Not example

credits = 120
gpa = 1.8

if not credits >= 120:
  print("You do not have enough credits to graduate.")

if not gpa >= 2.0:
  print("Your GPA is not high enough to graduate.") 

if not credits >= 120 and not gpa >= 2.0:
  print("You do not meet either requirement to graduate!") 

#Example of an IF Else statement 

if weekday:
  print("wake up at 6:30")
else:
  print("sleep in")

#Example of else if statement. 
grade = 86

if grade >= 90:
  print("A")
elif grade >= 80:
  print("B")
elif grade >= 70:
  print("C")
elif grade >= 60:
  print("D")
else:
  print("F")

# SyntaxError: Error caused by not following the proper structure (syntax) of the language.
# NameError: Errors reported when the interpreter detects a variable that is unknown.
# TypeError: Errors thrown when an operation is applied to an object of an inappropriate type.

# Use , to add a variable to a string, not like JS.  
print("The rectangle area is", area )


#List example 
heights = [61, 70, 67, 64]

#List Methods: 

#Append - An example of a popular list method is .append(), which allows us to add an element to the end of a list.
append_example = [ 'This', 'is', 'an', 'example']
append_example.append('list')
 
print(append_example)
# Will output: ['This', 'is', 'an', 'example', 'list']

#Remove - This will remove the selected info.
example_list.remove('list')

#Used to access part of a list. 0 will be the first. You can use the negatives to select backwards, in the example below we would select the end of the list. 
pancake_recipe[-1]

#The below code is an example how you can replace a select part of a list. 
garden_waitlist[1] = "Calla"

#Can add several lists together, see the below examples. 

heights = [["Noelle", 61], ["Ava", 70], ["Sam", 67], ["Mia", 64]]

#A 2d list with three lists in each of the indices. 
tic_tac_toe = [
            [["X"],["O"],["X"]], 
            [["O"],["X"],["O"]], 
            [["O"],["O"],["X"]]
]

#Adding a sublist requires two sets of [], to contain both the lists. Please see the example below
heights = [["Jenny", 61], ["Alexus", 70], ["Sam", 67], ["Grace", 64]]

heights +=  [["Vik", 68]]

#List Methods: Insert, Pop, Range, len, Sort, sorted

### The Python list method .insert() allows us to add an element to a specific index in a list.The 0 represents where the word will place. 
front_display_list.insert(0, "Pineapple")

### The .pop() method takes an optional single input / Able to remove an input. 

data_science_topics.pop() #This would pop the last item on the list. 

data_science_topics.pop(3) #You can add a number to select where you would like to pop the list. This would pop the 4th item.

### Range, can be used to count up to a number

number_list = range(9) 
print(list(number_list)) #Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]. You have to use the list command to print it as a list otherwise it would appear as range(0, 9)

my_list = range(2, 9) #By using two numbers you can select where the range starts and finishes.

my_range2 = range(2, 9, 2) #Using a third number means you can slect how the range increases. An example of the output for this would be [2, 4, 6, 8]

### len() is used to get the number of elements within a list. 

my_list = [1, 2, 3, 4, 5]
 
print(len(my_list)) #5 would be returned. 

### sort() This will sort the list either numerically or alphabetically. 
names.sort() #This would sort the names in alphabetical order

cities.sort(reverse=True) #Using reverse=True, you can sort the list in reverse order. 

sorted_cities = cities.sort() #!!! This would not work, the .sort() method does not return any value and thus does not need to be assigned to a variable. This is why we will see the value of None as our output for sorted_cities

### The sorted() function is different from the .sort() method in two ways:
#1) It comes before a list, instead of after as all built-in functions do.
#2) It generates a new list rather than modifying the one that already exists.
#Below is an example of using sorted to generate a new variable 


#Slicing Lists I

sliced_list = letters[1:6] #letters[start:end] (Letters being the variable name)

#Slicing Lists II

fruits[:n] #Gives us the first n of the list.
print(fruits[:3]) #Gives us the first 3 items on the list (0,1,2)
fruits[-n:] #Last item on the list
print(fruits[-2:]) #Slices from negative two on the list. ["apple", "cherry", "pineapple", "orange", "mango"] would become ['orange', 'mango']

# This one would take the last two elements and keep them. 
last_two_elements = suitcase[-2:]
print(last_two_elements)

# This one would take the all but the last two elements. 
slice_off_last_three  = suitcase[:-2]
print(slice_off_last_three)

#Counting in a List: Used to count the amount of times something appears within a list. 
num_i = letters.count("i") #This would count the amount of times that letter appeared within the list. 

###Loops 

#For Loop, below is a for loop that will print out each of the sport_games string (The indent is vital with Python)
sport_games = ["football", "hockey", "baseball", "cricket"]

for sport in sport_games:
  print(sport)

#For Loops: Using Range.
#By using range you can select how many times you want the for loop to load.

promise = "I will finish the python loops module!"

for example in range(5):
  print(promise)

#While loops
# while <conditional statement>:
#   <action>

countdown = 10
while countdown >= 0:
  print(countdown)
  countdown -= 1
print("We have liftoff!")

#While Loops: Lists

python_topics = ["variables", "control flow", "loops", "modules", "classes"]

#Your code below: 
length = len(python_topics)
index = 0

while index < length:
  print("I am learning about", python_topics[index])
  index += 1

#Loop Control: Break, this is used to break from a loop once it meets a certain condition, please see the example below. 

dog_breeds_available_for_adoption = ["french_bulldog", "dalmatian", "shihtzu", "poodle", "collie"]
dog_breed_I_want = "dalmatian"

i = 0 

for dog_breed in dog_breeds_available_for_adoption:
  print(dog_breed)
  i += 1
  if dog_breed == dog_breed_I_want:
    print("They have the dog I want!")
    break

#Loop Control: Continue

ages = [12, 38, 34, 26, 21, 19, 67, 41, 17]

for age in ages:
  if age <= 20:
    continue
  print(age)

#This code will only continue if the age is above 21. Otherwise it will try again with the next number in the list. 

#Nested Loops (Sometimes you have a loop within a loop, an example would be this list of project teams), what if we wanted to loop through each of the teams to list every name in the class. 

project_teams = [["Ava", "Samantha", "James"], ["Lucille", "Zed"], ["Edgar", "Gabriel"]]

# Loop through each sublist
for team in project_teams:
  # Loop elements in each sublist
  for student in team:
    print(student)

#Another example, below has a list of Icecream scoops sold, it has a nested loop that loops through and adds the scoop sales to the total scoops sold variable. 
sales_data = [[12, 17, 22], [2, 10, 3], [5, 12, 13]]

scoops_sold = 0

for location in sales_data: 
  print(location)
  for data in location:
    scoops_sold += data
print(scoops_sold)

#List Comprehensions: 
grades = [90, 88, 62, 76, 74, 89, 48, 57]
scaled_grades = [grade + 10 for grade in grades] #This allows me to write the code within one line. adding the loop after the action. 
print(scaled_grades)

#List Comprehensions: Conditionals

heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]
can_ride_coaster = [height for height in heights if height > 161] #This will loop through the heights variable and add the heights above 161 to the new list. Ignoring any that are the same or below

### Defining a Function

def function_name():
  # functions tasks go here
#Once the white space ends, it is the end of the function. 

function_name() #This is how you would call the function.

def my_function(single_parameter) #To add a paramater you would add it within the brackets. 
  # some code

# EXAMPLE: 
def generate_trip_instructions(location):
  print("Looks like you are planning a trip to visit " + location)
  print("You can use the public subway system to get to " + location)

generate_trip_instructions("Central Park")
generate_trip_instructions("Grand Central Station")

# You can also declaire more than one parameter within the function.  
def my_function(parameter1, parameter2, parameter3):

# Below is an example of writing a default value for a parameter. 
def trip_planner(final_destination="Codecademy HQ")

#You can also add the parameters as shown below, with the name next to the value.
trip_planner(first_destination="Iceland", final_destination="Germany", second_destination="India")

#If a variable lives outside of any function it can be accessed anywhere in the file.

# Returns = Can be used to return the value of the variable to the main scope. (Functions can also return a value to the program so that this value can be modified or used later.)

def deduct_expense(budget, expense):
  return budget - expense #Would return the info.

#Another example, Will return the information from the function back to variables that can be used elsewhere in the program. 
def top_tourist_locations_italy(most_popular1, most_popular2, most_popular3):
  first = "Rome"
  second = "Venice"
  third = "Florence"
  return first, second, third

print(most_popular1)
print(most_popular2)
print(most_popular3)

#Introduction to Strings
#Cut Me a Slice of String

first_name = "Rodrigo"
last_name = "Villanueva"

new_account = last_name[:5] #This would slice the last 5 letters of the variable last_name. 

temp_password = last_name[2:6] #Slices through the 3rd though six letters. 

def account_generator(first_name, last_name):
  return first_name[:3] + last_name[:3] #Takes the first 3 letters of both the first and last name. 

new_account = account_generator(first_name, last_name) #Saves the results as a variable

second_to_last = company_motto[-2] #Will find the second to last charachter. 
final_word = company_motto[-4:] #Adding the dots will mean it take the last 4 charachters.


#Strings are Immutable (You can't change them, but can make new strings) The code below fixes Bob to Rob. 

first_name = "Bob"
last_name = "Daily"

fixed_first_name = "R" + first_name[-2:]


#Use \ as an escape charachter. When writing a string this will prevent the charachter using it's normal python meaning.
password = "theycallme\"crazy\"91"

#The below code loops through the letters within something_elsr
def get_length(something_else):
  counter = 0
  for something in something_else:
    counter += 1
  return counter


#This code checks through the word to see if any of the characters matches the letter. 
def letter_check(word, letter):
  for character in word:
    if character == letter:
      return True
  return False

letter_check("strawberry", "a") #This would return true
letter_check("strawberry", "o") #This would return false


#If little string is within big string return true. Else return false. 
def contains(big_string, little_string):
  if little_string in big_string:
    return True
  return False
  


#common_letters takes two arguments, string_one and string_two and then returns a list with all of the letters they have in common.
def common_letters(string_one, string_two):
  common = []
  for letter in string_one:
    if (letter in string_two) and not (letter in common):
      common.append(letter)
  return common



def username_generator(first_name, last_name):
  username = first_name[:3] + last_name[:4]
  return username

def password_generator(user_name):
    password = ""
    for i in range(0, len(user_name)):
        password += user_name[i-1]
    return password

#Formatting Methods - Strings
favorite_song = 'SmOoTH'

favorite_song.lower() # returns the string with all lowercase characters.
favorite_song.upper() # returns the string with all uppercase characters.
favorite_song.title() # returns the string in title case, which means the first letter of each word is capitalized.
favorite_song.split() #Takes one argument, and returns a list of substrings found between the given argument, if you do not provide an arguement like the example on the left, it will default to splitting at spaces. 

author_last_names = [] #Creates an empty array.
for name in author_names: #Loops through authors names.
  author_last_names.append(name.split()[-1]) #Splits the names and take the last string (Last name)

#using \n you can split a string into different lines. \t would be a horizontal tab. 
spring_storm_text = \
"""The sky has given over 
its bitterness. 
Out of the dark change 
all day long 
rain falls and falls 
as if it would never end. 
Still the snow keeps 
its hold on the ground. 
But water, water 
from a thousand runnels! 
It collects swiftly, 
dappled with black 
cuts a way for itself 
through green ice in the gutters. 
Drop after drop it falls 
from the withered grass-stems 
of the overhanging embankment."""

spring_storm_lines = spring_storm_text.split('\n')

for lines in highlighted_poems_stripped: #Loops through highlighted_poems_stripped
  highlighted_poems_details.append(lines.split(':')) #Splits the :


#Joining Strings - .join() is used as the oppsite of split. 

reapers_line_one_words = ["Black", "reapers", "with", "the", "sound", "of", "steel", "on", "stones"]

reapers_line_one = ' '.join(reapers_line_one_words) #This would join the string with a space. Creating a sentance. Saving the new string as reapers_line_one 

winter_trees_full = '\n'.join(winter_trees_lines) #Using \n you can join the string with different lines as before with split. 

#Strip method - .strip() This removes all the white spaces characthers from the start and end of the string. Useful as often you find a lot of extra whitespace and unnecessary breaks when pulling real data. 

love_maybe_lines = ['Always    ', '     in the middle of our bloodiest battles  ', 'you lay down your arms', '           like flowering mines    ','\n' ,'   to conquer me home.    ']

love_maybe_lines_stripped = []
 
  love_maybe_lines_stripped.append(lines.strip()) #Gets rid of the white space and appends the new strings to the empty string outside of the loop. 

love_maybe_full = '\n'.join(love_maybe_lines_stripped) #Joins the lines of the string, to make one large multi-line string, and save it as a variable. 

#Replace - .replace() Replace takes two arguments and replaces all instances of the first argument in a string with the second argument.

string_name.replace(character_being_replaced, new_character)

toomer_bio_fixed = toomer_bio.replace("Tomer", "Toomer") #Example

#Find - .find() Takes a string as an argument and searching the string it was run on for that string. It then returns the first index value where that string is located.

print('smooth'.find('t'))
# => '4'

god_wills_it_line_one = "The very earth will disown you"
disown_placement = god_wills_it_line_one.find('disown')

#Format - .format() Takes variables as an argument and includes them in the string that it is run on

def favorite_song_statement(song, artist):
  return "My favorite song is {} by {}.".format(song, artist)

def poem_title_card(title, poet):
  return "The poem \"{}\" is written by {}.".format(title, poet)

#Instead of having empty {} you can place information about what variable you would like where. You must call this within the .format as shown in the example below. 
def poem_description(publishing_date, author, title, original_work):
  poem_desc = "The poem {title} by {author} was originally published in {original_work} in {publishing_date}.".format(publishing_date=publishing_date, author=author, title=title, original_work=original_work)
  return poem_desc

my_beard_description = poem_description("1974", "Shel Silverstein", "My Beard", "Where the Sidewalk Ends")

#Modules Python Introduction

# Import datetime from datetime below:
from datetime import datetime #from module_name import object_name. 
#By importing only the object name, you prevent yourself from importing the whole module, meaning runtime stays down. 

current_time = datetime.now()

print(current_time)


import random # Allows you to generate numbers or select items at random using random.randint()
random_list = [random.randint(1,100) for i in range(101)] #Makes a random list.

randomer_number = random.choice(random_list) #Prints one random number from the random list. 

from matplotlib import pyplot as plt #Example of importing pyplot with an Alias.


import codecademylib3_seaborn

# Add your code below:
#The code below prints out a graph with random points at both the x and y axes. 
from matplotlib import pyplot as plt 

import random

numbers_a = range(1, 13)

numbers_b = random.sample(range(1000), 12)

plt.plot(numbers_a, numbers_b)

plt.show()

# Importing decimal to help round our numbers correctly.
# Import Decimal below:
from decimal import Decimal

# Fix the floating point math below:
two_decimal_points = Decimal("0.2")+ Decimal("0.69")
print(two_decimal_points)

four_decimal_points = Decimal("0.5300") * Decimal("0.6500")
print(four_decimal_points)

#You can import functions from your othe py files. By completing the actions below. This would inport the always_free function from the library.py file
# Import library below:
from library import always_three

# Call your function below:
always_three()

#Dictionary (A dictionary is an unordered set of key: value pairs)
#An example of hashing / Dictionaries in Python rely on each key having a hash value, a specific identifier for the key. If the key can change, that hash value would not be reliable. So the keys must always be unchangeable, hashable data types, like numbers or strings.

menu = {"avocado toast": 6, "carrot juice": 5, "blueberry muffin": 2} #An example with numbers and strings. 
subtotal_to_total = {20: 24, 10: 12, 5: 6, 15: 18} #Numeric example
students_in_classes = {"software design": ["Aaron", "Delila", "Samson"], "cartography": ["Christopher", "Juan", "Marco"], "philosophy": ["Frederica", "Manuel"]} #Sting example, with an array. 

#Important: We can have a list or a dictionary as a value of an item in a dictionary, but we cannot use these data types as keys of the dictionary. If we try to, we will get a TypeError.

my_empty_dictionary = {} #An empty dictionary. Notice it is {} rather than [] which would be for an array. 

# {key: value, key: value, key: value}
animals_in_zoo = {"zebras": 8, "monkeys": 12, "dinosaurs": 0}

# Add Multiple Keys .update()
animals_in_zoo.update({"Dog": 13, "Cat": 8})

# animals_in_zoo would then become {"zebras": 8, "monkeys": 12, "dinosaurs": 0, "Dog": 13, "Cat": 8})

#Overwrite Values 
animals_in_zoo["cat"] = 5 #This would overwise the cars value to change it to 5

#List Comprehensions to Dictionaries
#Let’s say we have two lists that we want to combine into a dictionary, like a list of students and a list of their heights, in inches:

names = ['Jenny', 'Alexus', 'Sam', 'Grace']
heights = [61, 70, 67, 64]

students = {key:value for key, value in zip(names, heights)}
#students is now {'Jenny': 61, 'Alexus': 70, 'Sam': 67, 'Grace': 64}

#Another example
drinks = ["espresso", "chai", "decaf", "drip"]
caffeine = [64, 40, 0, 120]

zipped_drinks = zip(drinks, caffeine) #zip() combines two lists into a zipped list of pairs. 

drinks_to_caffeine = {key:value for key, value in zipped_drinks} #Same as students, matches the data of the two lists. So espresso: 64

library = {"The Best Songs": plays, "Sunday Feelings": {}} #library that has two key: value pairs:

#Get A Key
zodiac_elements = {"water": ["Cancer", "Scorpio", "Pisces"], "fire": ["Aries", "Leo", "Sagittarius"], "earth": ["Taurus", "Virgo", "Capricorn"], "air":["Gemini", "Libra", "Aquarius"]}

print(zodiac_elements["earth"]) #The following would access the earth key and print ['Taurus', 'Virgo', 'Capricorn']
print(zodiac_elements["fire"])

#If the key is invalid you will get a KeyError message. To check if a key is available you could use a if statement. 

 
if key_to_check in zodiac_elements:
  print(building_heights["earth"])

#Try/Except to Get a Key

caffeine_level = {"espresso": 64, "chai": 40, "decaf": 0, "drip": 120}

try:
  print(caffeine_level["matcha"]) #Try finding this key with caffeine_level.
except KeyError:
  print("Unknown Caffeine Level") #If not print this error/If a KeyError message appears. 


#Whilst they Try/Except resolves the issue of getting a key/preventing an error, it is not sustainable. A better way to Safely Get a Key is listed below by using the .get() method

user_ids = {"teraCoder": 100019, "pythonGuy": 182921, "samTheJavaMaam": 123112, "lyleLoop": 102931, "keysmithKeith": 129384}

tc_id = user_ids.get("teraCoder", 100000) #Pretty simple, will either fine the valye or return None. 
print(tc_id)

#To delete a key you can use .pop()
#By using pop below we are removing the key from available items and adding the points to health_points. 
available_items = {"health potion": 10, "cake of the cure": 5, "green elixir": 20, "strength sandwich": 25, "stamina grains": 15, "power stew": 30}
health_points = 20

health_points += available_items.pop("stamina grains", 0)
health_points += available_items.pop("power stew", 0)
health_points += available_items.pop("mystic bread", 0)
print(available_items) #{'health potion': 10, 'cake of the cure': 5, 'green elixir': 20, 'strength sandwich': 25}
print(health_points) #65


#Get All Keys by using the .keys() function
user_ids = {"teraCoder": 100019, "pythonGuy": 182921, "samTheJavaMaam": 123112, "lyleLoop": 102931, "keysmithKeith": 129384}

users = user_ids.keys() #Gets all the dict keys from user_ids

print(users) #dict_keys(['teraCoder', 'pythonGuy', 'samTheJavaMaam', 'lyleLoop', 'keysmithKeith'])

#If we want the values instead of the keys, we would use .values()
#Below is an example of iterating through num_exercises and only pulling the number values. Then adding these values to total_exercises.
num_exercises = {"functions": 10, "syntax": 13, "control flow": 15, "loops": 22, "lists": 19, "classes": 18, "dictionaries": 18}

total_exercises = 0

for numbers in num_exercises.values():
  total_exercises += numbers

#Get All Items, and display them in text. Below the first set in the dictionary would display "Women make up 28 percent of CEOs."
pct_women_in_occupation = {"CEO": 28, "Engineering Manager": 9, "Pharmacist": 58, "Physician": 40, "Lawyer": 37, "Aerospace Engineer": 9}

for job, employees in pct_women_in_occupation.items():
  print("Women make up " + str(employees) + " percent of " + job + "s.")

#Reading a File 

with open('welcome.txt') as text_file: #Find the file and save it as alias text_file
  text_data = text_file.read() #Read the content of the file and save it as a variable.
print(text_data) #Print out the content. 

#Iterating Through Lines (Using .read will save it all as one string. But using readlines would save them as different lines.)
#Below is how we would use readlines to itterate through the lines in the file. 

with open('how_many_lines.txt') as lines_doc:
  for line in lines_doc.readlines():
    print(line)

#Reading a line will prevent you from itterating the whol file. readline is different to readlines for this reason. 
with open('just_the_first.txt') as first_line_doc:
  first_line = first_line_doc.readline() #Would save the first line.
  second_line = first_line_doc.readline() #Would save the second line. 
  print(first_line)

#Writing a file, using the text below is how we would complete this. 

with open('generated_file.txt', 'w') as gen_file: #The w would open this in write mode. 
  gen_file.write("What an incredible file!") #This would write this to the file. 

#Appending to a File
with open('generated_file.txt', 'a') as gen_file: #Instead of deleting or re-writting a file, you can add an a for append. This means youc an add another line to the file. 
  gen_file.write("... and it still is")

#What Is a CSV File? CSV files are an example of a text file that impose a structure to their data. CSV stands for Comma-Separated Values and CSV files are usually the way that data from spreadsheet software (like Microsoft Excel or Google Sheets) is exported into a portable format.

with open('logger.csv') as log_csv_file: #You would open a csv file similar to a .txt
  print(log_csv_file.read()) #This will read the file and print it to the console. 


#Reading a CSV File
import csv #Importing the CSV module
 
list_of_email_addresses = [] 
with open('cool_csv.csv') as cool_csv_file: #Open the file as a temporary variable. 
  cool_csv_dict = csv.DictReader(cool_csv_file) #Create a Dict Reader using the constructor 
  for row in cool_csv_dict: #Loop through the rows 
    print(row)
 

 #TSV files Tab seporated files. 

import csv #imports the csv module

isbn_list = [] #Creates an empty list.

with open('books.csv') as books_csv: #Opens books.csv with a temporary variable.
  books_reader = csv.DictReader(books_csv, delimiter='@') #Uses a DictReader with @ as the delimiter. Saves the result as a temporary variable.
  for numbers in books_reader: #Loops through book_readers dict
    isbn_list.append(numbers['ISBN']) #Adds the details requested to the list outside of the loop. Making it accessible outside. (Scope)

#Writing a CSV File

import csv

access_log = [{'time': '08:39:37', 'limit': 844404, 'address': '1.227.124.181'}, {'time': '13:13:35', 'limit': 543871, 'address': '198.51.139.193'}, {'time': '19:40:45', 'limit': 3021, 'address': '172.1.254.208'}, {'time': '18:57:16', 'limit': 67031769, 'address': '172.58.247.219'}, {'time': '21:17:13', 'limit': 9083, 'address': '124.144.20.113'}, {'time': '23:34:17', 'limit': 65913, 'address': '203.236.149.220'}, {'time': '13:58:05', 'limit': 1541474, 'address': '192.52.206.76'}, {'time': '10:52:00', 'limit': 11465607, 'address': '104.47.149.93'}, {'time': '14:56:12', 'limit': 109, 'address': '192.31.185.7'}, {'time': '18:56:35', 'limit': 6207, 'address': '2.228.164.197'}]
fields = ['time', 'address', 'limit']


with open("logger.csv", "w") as logger_csv: #Open the file in write mode with a temporary variable.
  log_writer = csv.DictWriter(logger_csv, fieldnames=fields) #DictWriter and create a variable.
  log_writer.writeheader() #Write the header

  for item in access_log: #Loop through the lines of the access_log content variale and write them to the document
    log_writer.writerow(item)

#Reading a JSON File

import json #Import json module

with open('message.json') as message_json: #Open the file as a temporary file.
 message = json.load(message_json) #Load the message as a temporary variable.
 print(message['text']) #Print out content of the temporary variable. 


#Writing a JSON File

data_payload = [
  {'interesting message': 'What is JSON? A web application\'s little pile of secrets.',
   'follow up': 'But enough talk!'}
]

import json #Import json module

with open('data.json', 'w') as data_json: #Open the file as write mode with a temporary variable. 
    json.dump(data_payload, data_json) #Place the new info from the string into the file. 

#INTRODUCTION TO CLASSES
#Python equips us with many different ways to store data. A float is a different kind of number from an int, and we store different data in a list than we do in a dict. These are known as different types. We can check the type of a Python variable using the type() function.

#type is used to check what type of data it is. 
print(type(5)) #<class 'int'>

my_dict = {} #A variable set as an empty Dictionary 
print(type(my_dict)) #<class 'dict'>

my_list = [] #A variable set as an empty list 
print(type(my_list)) #<class 'list'>

#A class is a template for a data type. It describes the kinds of information that class will hold and how a programmer will interact with that data.


class CoolClass: #Setting a class called CoolClass
  pass

#The class does nothing if only defined, you need to call the class for it to work. 
cool_instance = CoolClass()

#Object-Oriented Programming / A class instance is also called an object. The pattern of defining classes and creating objects to represent the responsibilities of a program is known as Object Oriented Programming or OOP.

print(type(cool_instance))
# prints "<class '__main__.CoolClass'>"

#In Python __main__ means “this current file that we’re running” and so one could read the output from type() to mean “the class CoolClass that was defined here, in the script you’re currently running.”

#Class Variables
# When we want the same data to be available to every instance of a class we use a class variable. A class variable is a variable that’s the same for every instance of the class.

class Musician: #Class name/setting the class
  title = "Rockstar" #Class attribute
 
drummer = Musician() 
print(drummer.title) #Calling the class and attribute. 
# prints "Rockstar"

class Rules:
  def washing_brushes(self): #self arguement returns the info from below. 
    return "Point bristles towards the basin while washing your brushes." #Able to use return to return the info to self

#Methods with Arguments

class Circle:
  pi = 3.14
  def area(self, radius):
    return Circle.pi * radius ** 2 #Important to add the Class name before the pi otherwise it is out of scope from the function. 

circle = Circle() #Needed to be able to call the class
pizza_area = circle.area(12/2) #Calling the class and setting the results as a variable. 
teaching_table_area = circle.area(36/2)
round_room_area = circle.area(11460/2)


#Constructors - Methods that are used to prepare an object being instantiated are called constructors.

class Circle:
  pi = 3.14
 
  # Add constructor here:
  def __init__ (self, diameter):
    print("New circle with diameter: {diameter}".format(diameter=diameter))

teaching_table = Circle(36) #Now you can add any number in the Circle() and it will run the constructor. Making the code more reusable. 


#Instance Variables - The data held by an object is referred to as an instance variable. 

class Store:
  pass

alternative_rocks = Store() #Creates an object named alternative_rocks from the Store class
isabelles_ices = Store()

alternative_rocks.store_name = "Alternative Rocks" #Gives the class an incidence attriubute called store_name
isabelles_ices.store_name = "Isabelle's Ices"

#getattr() is a Python function that will return the value of a given object and attribute. 

hasattr(attributeless, "fake_attribute")
# returns False
 
getattr(attributeless, "other_fake_attribute", 800)
# returns 800, the default value


can_we_count_it = [{'s': False}, "sassafrass", 18, ["a", "c", "s", "d", "s"]]


for element in can_we_count_it: #Loop through the list.
    if hasattr(element, "count"): #If the list has the count element
        print(str(type(element)) + " has the count attribute!") #Print this string. 
    else:
        print(str(type(element)) + " does not have the count attribute :(") #If it does not have the count element, print this string.

#Self - self keyword refers to the object and not the class being called

class Circle:
  pi = 3.14
  def __init__(self, diameter):
    print("Creating circle with diameter {d}".format(d=diameter))
    # Add assignment for self.radius here:
    
    self.radius = diameter / 2

  def circumference(self):
    return 2 * self.pi * self.radius #Returning self.pi * self.redius, self allowing the code to be reusable. 

medium_pizza = Circle(12) #Creates a variable and will run through the Circle class with 12 represending self. 
teaching_table = Circle(36)
round_room = Circle(11460)

print(medium_pizza.circumference())
print(teaching_table.circumference())
print(round_room.circumference())

#We can use the dir() function to investigate an object’s attributes at runtime. An example shown below. 

money = 1

def this_function_is_an_object(money):
  return money * 5


print(dir(this_function_is_an_object))

#__repr__(). This is a method we can use to tell Python what we want the string representation of the class to be.
#__repr__() can only have one parameter, self, and must return a string.

  def __repr__(self):
    return "Circle with radius {radius}".format(radius=self.radius) #The .format(radius=self.radius) is important for when trying to add the self work as a word within the string. With Self represenging radius. 


#Review
class Student:
  def __init__(self, name, year):
    self.name = name
    self.year = year
    self.grades = []

  def add_grade(self, grade):
    if type(grade) is Grade:
      self.grades.append(grade)    

class Grade:
  minimum_passing = 65
  def __init__(self, score):
    self.score = score

roger = Student("Roger van der Weyden", 10)
sandro = Student("Sandro Botticelli", 12)
pieter = Student("Pieter Bruegel the Elder", 8)
pieter.add_grade(Grade(100))
    

#Sub Classes 

class Bin:
  pass

class Subclass(Superclass): #For,at example.
  pass

class RecyclingBin(Bin): #Real code example Example
  pass

#Exceptions
#issubclass() is a Python built-in function that takes two parameters. issubclass() returns True if the first argument is a subclass of the second argument.

issubclass(ZeroDivisionError, Exception)
# Returns True

class KitchenException(Exception):
  """
  Exception that gets thrown when a kitchen appliance isn't working
  """
 
class MicrowaveException(KitchenException):
  """
  Exception for when the microwave stops working
  """
 
class RefrigeratorException(KitchenException):
  """
  Exception for when the refrigerator stops working
  """

def get_food_from_fridge():
  if refrigerator.cooling == False:
    raise RefrigeratorException
  else:
    return food
 
def heat_food(food):
  if microwave.working == False:
    raise MicrowaveException
  else:
    microwave.cook(food)
    return food
 
try:
  food = get_food_from_fridge()
  food = heat_food(food)
except KitchenException:
  food = order_takeout()


# Define your exception up here:
class OutOfStock(Exception):
  pass

###Example of exceptions with candles. 
# Define your exception up here:
class OutOfStock(Exception):
  pass

# Update the class below to raise OutOfStock
class CandleShop:
  name = "Here's a Hot Tip: Buy Drip Candles"
  def __init__(self, stock):
    self.stock = stock
    
  def buy(self, color):
    if self.stock[color] < 1:
      raise OutOfStock
    self.stock[color] = self.stock[color] - 1

candle_shop = CandleShop({'blue': 6, 'red': 2, 'green': 0})
candle_shop.buy('blue')

# This should raise OutOfStock:
# candle_shop.buy('green')


# A parameter is a variable in the definition of a function.
# An argument is the value being passed into a function call.
# A function definition begins with def and contains the entire following indented block.
# And function calls are the places a function is invoked, with parentheses, after its definition


# None: It's Nothing! 
#How do you define a variable that you can’t assign a value to yet? You use None.

none_var = None
if none_var:
  print("Hello!")
else:
  print("Goodbye")


from review_lib import get_next_review, submit_review
# define review here!

review = get_next_review()

if review is None: #Checks if there is a review by comparing it against None
  submit_review(review)