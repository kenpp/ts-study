interface ImageInfo {
    name: ImageNames;
    address: string;
    imgName: string;
    imgNumber: number;
}
// 列挙型
enum ImageNames {
    FUAGA = "fuga",
    HOGE = "hoge",
    TEST = "test",
    EXAMPLE = "example",
    SAMPLE = "sample"
}
// 参考にする。
// https://www.nslabs.jp/js-boolean-value.rhtml
interface TrueFalse {
    undefinedValue?: string,
    nullValue: string | null,
    nanValue: any,
    falseValue: boolean,
    trueValue: boolean,
    zeroNumberValue: number,
    oneNumberValue: number,
    emptyStringValue: string,
    zeroStringValue: string,
    oneStringValue: string,
    emptyArrayValue: string[],
    emptyObjectValue: Object,
    arrayValue: string[],
    objectValue: ImageInfo,
}

// testDataを定義
const testDataList: ImageInfo[] = [
    {
        name: ImageNames.FUAGA,
        address: "fuga-address@test.com",
        imgName: "fuga.jpg",
        imgNumber: 1
    },
    {
        name: ImageNames.HOGE,
        address: "hoge-address@test.com",
        imgName: "hoge.jpg",
        imgNumber: 2
    },
    {
        name: ImageNames.TEST,
        address: "test-address@test.com",
        imgName: "test.jpg",
        imgNumber: 3
    },
    {
        name: ImageNames.EXAMPLE,
        address: "example-address@test.com",
        imgName: "example.jpg",
        imgNumber: 4
    },
    {
        name: ImageNames.SAMPLE,
        address: "sample-address@test.com",
        imgName: "sample.jpg",
        imgNumber: 5
    },
]

console.log("==============関数==============")
// 関数の定義
const addWithAllow = (x: number, y: number) => {
    return x + y;
}
console.log(addWithAllow(1, 2))

console.log("==============filter==============")
// filterの使い方。（条件に一致するものだけを返す）
var words: string[] = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result1 = words.filter(word => word.length > 6);
console.log(result1);

console.log("==============map==============")
// mapは、各要素に対して処理をして、新しい配列を定義する。
var numbers: number[] = [1, 4, 9, 16];
const result2 = numbers.map(num => num * 2);
console.log(result2);

console.log("==============forEach==============")
// mapと同じことを実行。（各要素に対して、処理を実行したい場合は、基本的には、mapでいいかなと。）
numbers.forEach(num => console.log(num * 2));

console.log("==============forEachは、返り値を持たない==============")
// mapと同じことを実行。（各要素に対して、処理を実行したい場合は、基本的には、mapでいいかなと。）
const result3 = numbers.forEach(num => { return num * 2 });
console.log(result3);


console.log("==============Findを使って、一件だけデータを取得==============")
// 一件だけデータを取得する場合
const testData = testDataList.find((testData) => testData.name === ImageNames.SAMPLE);
console.log(testData);

// エラーが起きたときにExceptionを起こす方法。
// const test = "test";
// try {
//     const result4 = JSON.parse(test);
// } catch (error) {
//     throw error;
// }

console.log("==============分割代入＆console.logに複数変数を渡す==============")
// 分割代入、console.logに複数変数を渡す方法。
const { name, address, imgName, imgNumber } = testDataList[0];
console.log(name, address, imgName, imgNumber)

// 真理値判定。
const trueFalseValues: TrueFalse = {
    undefinedValue: undefined,
    nullValue: null,
    nanValue: NaN,
    falseValue: false,
    trueValue: true,
    zeroNumberValue: 0,
    oneNumberValue: 1,
    emptyStringValue: "",
    zeroStringValue: '0',
    oneStringValue: '1',
    emptyArrayValue: [],
    emptyObjectValue: new Object(),
    arrayValue: words,
    objectValue: testDataList[0],
}
console.log("==============真偽値判定==============")
console.log("=======値=======")
console.log(trueFalseValues)
console.log("=======結果=======")
console.log("===TRUE===")

// 各要素を表示したい場合。（あんまり、entriesは使わないかなと。）
Object.values(trueFalseValues).forEach(value => {
    // valueがtrueと判定された場合、valueを返す。
    if (value) {
        console.log(value);
    }
})

console.log("===FALSE===")
Object.values(trueFalseValues).forEach(value => {
    // valueがfalseと判定された場合、valueを返す。
    if (!value) {
        console.log(value);
    }
})

console.log("==============Object.values==============")
// Objectのvalueに対して、再帰的に処理を行う。(返り値は配列になる。)
console.log(Object.values(trueFalseValues))


console.log("==============Object.keys==============")
// Objectのkeyに対して、再帰的に処理を行う。(返り値は配列になる。)
console.log(Object.keys(trueFalseValues))

console.log("==============Objectが空かどうかを判定==============")
console.log("=======空=======")
if (Object.keys(trueFalseValues.emptyObjectValue).length === 0) {
    console.log(trueFalseValues.emptyObjectValue)
}
console.log("=======空ではない=======")
if (Object.keys(trueFalseValues.objectValue).length !== 0) {
    console.log(trueFalseValues.objectValue)
}

console.log("==============Array.prototype.some()==============")
console.log(numbers.some(number => number < 10))

console.log("==============Array.prototype.every()==============")
console.log(numbers.every(number => number < 10))

console.log("==============Enumに含まれているか（values）==============")
const names = testDataList.map(testData => testData.name);
console.log(Object.values(ImageNames).includes(names[0]))
console.log("==============Enumに含まれているか（values）==============")
// なるほど！！！EnumをObjectとして取得するのね！で、その中のValueのみを利用する！
console.log(Object.entries(ImageNames).some(imageName => imageName[1] === names[0]))

console.log("==============EnumをObjectとして取得する方法==============")
console.log(Object.entries(ImageNames).forEach(imageName => console.log('key:' + imageName[0] + ", value:" + imageName[1])))
