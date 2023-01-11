// invert a playing charcter

function invertPlayer(inp) { return (inp == 1) ? 2 : 1 }

// given side to like, it will give a recomneded move

function calculate(like)
{
	// invert like to work out who to dislike

	const dislike = invertPlayer(like);
	
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

function aiswitch()
{
	dopredict = !dopredict;

	dopredictbutton.innerHTML = "AI: " + (dopredict ? "On" : "Off");

	if (dopredict)
	{
		
		var pre = calculate(ptm);
	
		board[pre[0]][pre[1]][1].parentElement.classList.add('predict');
	}
	else
	{
		resetPredict();
	}
}