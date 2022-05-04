
# import traceback

# codeInString = 'a = 5\nb=6\nsum=a+b\nprint("sum =",sum)'
# global b
# b = ""
# try:
#     codeObejct = compile(codeInString, 'sumstring', 'exec')
#     c = eval(codeObejct)
# except Exception:
#     print(traceback.format_exc())

# print("Baumhaus")

# print(c)

from tinydb import TinyDB, Query
db = TinyDB('./data/db2.json')
Fruit = Query()
e = db.search(Fruit.user_name == "Mondbaum")

print(e)
print(e["user_name"])