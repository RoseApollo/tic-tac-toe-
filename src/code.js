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
    board[ids[id][0]][ids[id][1]][0] = ptm;

    var winner = win();

    if (winner != 0)
    {
        score[winner - 1]++;

        info['score'].innerHTML = score[0] + " | " + score[1];
        info['go'] = "X's Go";

        ptm = 1;

        reset();
        return;
    }

    if (ptm == 1)
    {
        charater = "X";
    }
    else
    {
        charater = "O";
    }

    info['go'].innerHTML = charater + "'s Go";
}

function win()
{
    console.log(board);

    // row

    for (var x = 0; x <= 2; x++)
    {
        if (board[x][0][0] != 0)
        {
            if (board[x][0][0] == board[x][1][0])
            {
                if (board[x][1][0] == board[x][2][0])
                {
                    console.log("r: " + board[x][0][0]);

                    return board[x][0][0];
                }
            }
        }
    }

    // collum

    for (var y = 0; y <= 2; y++)
    {
        if (board[0][y][0] != 0)
        {
            if (board[0][y][0] == board[1][y][0])
            {
                if (board[1][y][0] == board[2][y][0])
                {
                    console.log("c: " + board[0][y][0]);

                    return board[0][y][0];
                }
            }
        }
    }

    // tl br line

    if (board[0][0][0] != 0)
    {
        if (board[0][0][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][2][0])
            {
                console.log("tl br: " + board[0][0][0]);

                return board[0][0][0];
            }
        }
    }

    // tr bl line

    if (board[0][2][0] != 0)
    {
        if (board[0][2][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][0][0])
            {
                console.log("tr bl: " + board[0][2][0]);

                return board[0][2][0];
            }
        }
    }

    for (var x = 0; x <= 2; x++)
    {
        for (var y = 0; y <= 2; y++)
        {
            if (board[x][y][0] == 0)
            {
                return 0;
            }
        }
    }

    return 3;
}

function reset()
{
    for (var x = 0; x <= 2; x++)
    {
        for (var y = 0; y <= 2; y++)
        {
            board[x][y][0] = 0;
            board[x][y][1].innerHTML = " ";
        }
    }
}