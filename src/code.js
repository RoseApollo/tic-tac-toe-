function move(id)
{
	if (board[ids[id][0]][ids[id][1]][0] != 0)
    {
        return;
    }
    
    var charater = (ptm == 1) ? "X" : "O";
    var optm = ptm;
	
	ptm = (ptm == 1) ? 2 : 1;

    board[ids[id][0]][ids[id][1]][1].innerHTML = charater;
    board[ids[id][0]][ids[id][1]][0] = optm;

    var winner = win();

    if (winner != 0)
    {
        if (winner != 3)
        {
            score[winner - 1]++;

            info['score'].innerHTML = score[0] + " | " + score[1];

            tabloid.classList.add('win');
        }
        else
        {
            tabloid.classList.add('lol')
        }

        info['go'] = "X's Go";

        ptm = 1;

        setTimeout(function ()
        {
            reset();
        }, 1500);

        return;
    }
	
	charater = (ptm == 1) ? "X" : "O";

    info['go'].innerHTML = charater + "'s Go";
	
	resetPredict();
	
	var pre = calculate(ptm);
	
	board[pre[0]][pre[1]][1].parentElement.classList.add('predict');
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
	
	resetPredict();

    tabloid.classList.remove('win');
    tabloid.classList.remove('lol');
	
	load();
}

function calculate(like)
{
	const dislike = (like == 1) ? 2 : 1;
	
	//LIKE
	
	for (var x = 0; x <3; x++)
	{
		if (board[x][0][0] == like && board[x][1][0] == like && board[x][2][0] == 0)
		{
			return [x, 2];
		}
		if (board[x][0][0] == like && board[x][1][0] == 0 && board[x][2][0] == like)
		{
			return [x, 1];
		}
		if (board[x][0][0] == 0 && board[x][1][0] == like && board[x][2][0] == like)
		{
			return [x, 0];
		}
	}
	
	for (var x = 0; x <3; x++)
	{
		if (board[0][x][0] == like && board[1][x][0] == like && board[2][x][0] == 0)
		{
			return [2, x];
		}
		if (board[0][x][0] == like && board[1][x][0] == 0 && board[2][x][0] == like)
		{
			return [1, x];
		}
		if (board[0][x][0] == 0 && board[1][x][0] == like && board[2][x][0] == like)
		{
			return [0, x];
		}
	}
	
	if (board[0][0][0] == like && board[1][1][0] == like && board[2][2][0] == 0)
	{
		return [2, 2];
	}
	if (board[0][0][0] == like && board[1][1][0] == 0 && board[2][2][0] == like)
	{
		return [1, 1];
	}
	if (board[0][0][0] == 0 && board[1][1][0] == like && board[2][2][0] == like)
	{
		return [0, 0];
	}
	
	if (board[0][2][0] == like && board[1][1][0] == like && board[2][0][0] == 0)
	{
		return [2, 0];
	}
	if (board[0][2][0] == like && board[1][1][0] == 0 && board[2][0][0] == like)
	{
		return [1, 1];
	}
	if (board[0][2][0] == 0 && board[1][1][0] == like && board[2][0][0] == like)
	{
		return [0, 2];
	}
	
	//DISLIKE
	
	for (var x = 0; x <3; x++)
	{
		if (board[0][x][0] == dislike && board[1][x][0] == dislike && board[2][x][0] == 0)
		{
			return [2, x];
		}
		if (board[0][x][0] == dislike && board[1][x][0] == 0 && board[2][x][0] == dislike)
		{
			return [1, x];
		}
		if (board[0][x][0] == 0 && board[1][x][0] == dislike && board[2][x][0] == dislike)
		{
			return [0, x];
		}
	}
	
	for (var x = 0; x <3; x++)
	{
		if (board[x][0][0] == dislike && board[x][1][0] == dislike && board[x][2][0] == 0)
		{
			return [x, 2];
		}
		if (board[x][0][0] == dislike && board[x][1][0] == 0 && board[x][2][0] == dislike)
		{
			return [x, 1];
		}
		if (board[x][0][0] == 0 && board[x][1][0] == dislike && board[x][2][0] == dislike)
		{
			return [x, 0];
		}
	}
	
	if (board[0][0][0] == dislike && board[1][1][0] == dislike && board[2][2][0] == 0)
	{
		return [2, 2];
	}
	if (board[0][0][0] == dislike && board[1][1][0] == 0 && board[2][2][0] == dislike)
	{
		return [1, 1];
	}
	if (board[0][0][0] == 0 && board[1][1][0] == dislike && board[2][2][0] == dislike)
	{
		return [0, 0];
	}
	
	if (board[0][2][0] == dislike && board[1][1][0] == dislike && board[2][0][0] == 0)
	{
		return [2, 0];
	}
	if (board[0][2][0] == dislike && board[1][1][0] == 0 && board[2][0][0] == dislike)
	{
		return [1, 1];
	}
	if (board[0][2][0] == 0 && board[1][1][0] == dislike && board[2][0][0] == dislike)
	{
		return [0, 2];
	}
	
	//CENTER
	
	if (board[1][1][0] == 0)
	{
		return [1, 1];
	}
	
	//CORNERS
	
	if (board[0][0][0] == 0)
	{
		return [0, 0];
	}
	if (board[0][2][0] == 0)
	{
		return [0, 2];
	}
	if (board[2][0][0] == 0)
	{
		return [2, 0];
	}
	if (board[2][2][0] == 0)
	{
		return [2, 2];
	}
	
	//EDGES
	
	if (board[0][1][0] == 0)
	{
		return [0, 1];
	}
	if (board[2][1][0] == 0)
	{
		return [2, 1];
	}
	if (board[1][0][0] == 0)
	{
		return [1, 0];
	}
	if (board[1][2][0] == 0)
	{
		return [1, 2];
	}
}

function resetPredict()
{
	for (var x = 0; x <3; x++)
	{
		for (var y = 0; y <3; y++)
		{
			try
			{
				board[x][y][1].parentElement.classList.remove("predict");	
			}
			catch{}
		}
	}
}