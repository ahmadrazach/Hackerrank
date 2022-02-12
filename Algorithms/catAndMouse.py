# Complete the catAndMouse function below.
def catAndMouse(x, y, z):

    # cata_distance=abs(x-z)
    # catb_distance=abs(y-z)
    cata_distance = abs(x-z)
    catb_distance = abs(y-z)
    # check if postive(x-z)<+(y-z)
    if cata_distance < catb_distance:
        # return(CAT A)
        return("Cat A")
    # elif abs(y-z)<x-z
    elif catb_distance < cata_distance:
        #     return catb
        return("Cat B")
    # elif cata_dis==cat_distan
    else:
        #     return Mousec
        return("Mouse C")


print(catAndMouse(1, 3, 2))
