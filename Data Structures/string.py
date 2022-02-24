a = ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"]
for i in range(len(a)):
    a_list = a[i].split()
    map_object = map(int, a_list)
    list_of_integers = list(map_object)
    print(list_of_integers)
