var board = 
[
    [
        [0, document.getElementById("00")],
        [0, document.getElementById("01")],
        [0, document.getElementById("02")]
    ],
    [
        [0, document.getElementById("10")],
        [0, document.getElementById("11")],
        [0, document.getElementById("12")]
    ],
    [
        [0, document.getElementById("20")],
        [0, document.getElementById("21")],
        [0, document.getElementById("22")]
    ]
];

var ids =
{
    '00': [0, 0],
    '01': [0, 1],
    '02': [0, 2],

    '10': [1, 0],
    '11': [1, 1],
    '12': [1, 2],

    '20': [2, 0],
    '21': [2, 1],
    '22': [2, 2]
}

var ptm = 1;

function move(id)
{
    var charater = "";

    if (ptm === 1)
    {
        charater = "X"
    }
    else (ptm === 2)
    {
        charater = "O"
    }


}