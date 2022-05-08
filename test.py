with open('output.txt', 'w') as f:
	f.write('readme')
	f.write('1')
	
with open('input.txt', 'w') as i:
	i.write('readme')
	i.write('1')
	
input = open('input.txt', 'r')
output = open('output.txt', 'w')

while True:
    line = input.readline()
    if line == "" : break
    for i in range (5):
        output.write(str(i*int(line)))
        if i != 5:
            output.write(",")
    