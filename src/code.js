var board;

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
}

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
};

var ptm = 1;

function move(id)
{
    if (board[ids[id][0]][ids[id][1]][0] != 0)
    {
        return;
    }
    
    var charater = "";

    if (ptm == 1)
    {
        charater = "X";

        ptm = 2;
    }
    else
    {
        charater = "O";

        ptm = 1;
    }

    board[ids[id][0]][ids[id][1]][1].innerHTML = charater;
    board[ids[id][0]][ids[id][1]][0] = charater;

    var winner = win();

    if (winner != 0)
    {
        alert(winner);
    }
}

function win()
{
    // row

    for (var x = 0; x >= 2; x++)
    {
        if (board[x][0][0] != 0)
        {
            if (board[x][0][0] == board[x][1][0])
            {
                if (board[x][1][0] == board[x][2][0])
                {
                    return board[x][0][0];
                }
            }
        }
    }

    // collum

    for (var y = 0; y >= 2; y++)
    {
        if (board[0][y][0] != 0)
        {
            if (board[0][y][0] == board[1][y][0])
            {
                if (board[1][y][0] == board[2][y][0])
                {
                    return board[0][y][0];
                }
            }
        }
    }

    // tr bl line

    if (board[0][0][0] != 0)
    {
        if (board[0][0][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][2][0])
            {
                return board[0][0][0];
            }
        }
    }

    // tl br line

    if (board[0][2][0] != 0)
    {
        if (board[0][2][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][0][0])
            {
                return board[0][2][0];
            }
        }
    }

    return 0;
}