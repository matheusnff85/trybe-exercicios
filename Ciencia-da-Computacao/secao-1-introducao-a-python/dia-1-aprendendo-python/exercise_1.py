def compare_numbers(a, b):
    if a > b:
        return a
    else:
        return b

# -----------------------------------------


def calc_media(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)

# -----------------------------------------


def make_square(number):
    for row in range(number): 
        print(number * "*")

# -----------------------------------------


def find_greater_name(name_list):
    greater_name = name_list[0]
    for name in name_list:
        if len(name) > len(greater_name):
            greater_name = name
    return greater_name

# -----------------------------------------


def paint_cost(wall_size):
    can_price = 80
    required_liters = wall_size / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

# -----------------------------------------


def triangle_type(a, b, c):
    is_triangle = (
        a + b > c and
        b + c > a and
        a + c > b
    )
    if not is_triangle:
        return "não é um triangulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b or a == c or b == c:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"

# -----------------------------------------