def baseConversion(dec_number: int, numral_list: list) -> str:
    """基数変換

    Args:
        dec_number (int): 10進数の数
        numral_list (str[]): 数の表現に使われる文字リスト

    Raises:
        ValueError: _description_
        ValueError: _description_
        ValueError: _description_

    Returns:
        str: 変換後文字列
    """
    numral = len(numral_list)
    dec_number = abs(dec_number)
    if numral == 0:
        raise ValueError("numral is zero.")
    if isinstance(dec_number, int) == False:
        raise ValueError("float is not available.")
    if dec_number == 0:
        return numral_list[0]
    if numral == 1:
        return numral_list[0] * dec_number
    if dec_number < 0:
        raise ValueError("Cannot handle negative numbers.")
    result = ""
    while(dec_number >= 1):
        result = numral_list[dec_number % numral] + result
        dec_number //= numral
    return result


print(baseConversion(13, ["0", "1"]))
print(baseConversion(0, ["0", "1"]))
print(baseConversion(0, ["1"]))

print("-"*100)

try:
    baseConversion(-1, ["1"])
except ValueError as err:
    print(err)

try:
    baseConversion(0.1, ["1"])
except ValueError as err:
    print(err)

print("-"*100)

print(int(baseConversion(13, list("0123456")), base=7))
print("fin")
