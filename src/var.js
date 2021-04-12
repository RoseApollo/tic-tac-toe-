var board;
var info;
var score;
var ids;
var ptm;

function load()
{
    board = 
    [
        [
            [0, document.getElementById("id00")],
            [0, document.getElementById("id01")],
            [0, document.getElementById("id02")]
        ],
        [
            [0, document.getElementById("id10")],
            [0, document.getElementById("id11")],
            [0, document.getElementById("id12")]
        ],
        [
            [0, document.getElementById("id20")],
            [0, document.getElementById("id21")],
            [0, document.getElementById("id22")]
        ]
    ];

    info =
    {
        "score": document.getElementById("score"),
        "go": document.getElementById("go")
    };

    score =
    [
        0,
        0
    ];

    ids =
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
    };

    ptm = 1;
}