package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

/**
 * 基数変換関数
 * @param decNumber 10進数の数
 * @param numralArray 数の表現に使われる文字配列
 * @returns 変換後文字列
 */
func baseConversion(decNumber int, numralArray []string) string {
	numral := len(numralArray)
	decNumber = int(math.Abs(float64(decNumber)))
	if numral == 0 {
		return "Error: numral is zero."
	}
	if decNumber == 0 {
		return numralArray[0]
	}
	if math.IsNaN(float64(decNumber)) {
		return "Error: decNumber is Not a Number."
	}
	if math.IsInf(float64(decNumber), 0) {
		return "Error: A non-finite number."
	}
	if numral == 1 {
		return strconv.Itoa(decNumber * len(numralArray[0]))
	}
	if decNumber < 0 {
		return "Error: Cannot handle negative numbers."
	}
	result := ""
	for decNumber >= 1 {
		result = numralArray[decNumber%numral] + result
		decNumber = decNumber / numral
	}
	return result
}

func main() {
	fmt.Println(baseConversion(13, []string{"0", "1"}))
	fmt.Println(baseConversion(0, []string{"0", "1"}))
	fmt.Println(baseConversion(0, []string{"1"}))

	fmt.Println(strings.Repeat("-", 100))

	fmt.Println(baseConversion(-1, []string{"1"}))
	fmt.Println(baseConversion(0, []string{"1"}))

	fmt.Println(strings.Repeat("-", 100))

	val, _ := strconv.ParseInt(baseConversion(13, strings.Split("0123456", "")), 7, 0)
	fmt.Println(val)

	fmt.Println("fin.")
}
