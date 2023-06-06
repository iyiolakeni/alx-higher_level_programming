able File  5 lines (5 sloc)  144 Bytes
#!/usr/bin/python3
def print_last_digit(number):
    lastDig = int(str(number)[-1])
    print("{}".format(lastDig), end='')
    return(lastDig)
