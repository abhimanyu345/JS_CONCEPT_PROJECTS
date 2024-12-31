let turn = 'O';
let board = new Array(9);
board.fill('E');

let moves = 0;

const res = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let root = document.querySelector("#root");
const play = (event)=>{
    if(board[event.target.id]=='E'){
        moves++;
        if(turn=='O'){
            const cell = document.getElementById(event.target.id);
            cell.textContent = turn;
            turn = 'X';
            board[event.target.id] = 'O';
            for([index1, index2, iindex3] of res){
                if(board[index1]!='E' && board[index1]==board[index2] && board[index2]==board[iindex3]){
                    const winner = document.createElement('div');
                    winner.className = "winner";
                    winner.textContent = `Player ${board[index1]} wins`;
                    document.body.appendChild(winner);
                    root.removeEventListener('click', play);
                }
            }
            if(moves==9){
                const winner = document.createElement('div');
                winner.className = "winner";
                winner.textContent = `Draw`;
                document.body.appendChild(winner);
                root.removeEventListener('click', play);
            }
        }
        else{
            const cell = document.getElementById(event.target.id);
            cell.textContent = turn;
            turn = 'O';
            board[event.target.id] = 'X';
            for([index1, index2, iindex3] of res){
                if(board[index1]!='E' && board[index1]==board[index2] && board[index2]==board[iindex3]){
                    const winner = document.createElement('div');
                    winner.className = "winner";
                    winner.textContent = `Player ${board[index1]} wins`;
                    document.body.appendChild(winner);
                    root.removeEventListener('click', play);
                }
            }
        }
    }
};

root.addEventListener('click', play);
const button = document.getElementsByTagName('button')
button[0].addEventListener('click',()=>{
    const winner = document.querySelector(".winner");
    winner.remove();
    turn = 'O';
    board.fill('E');
    let cells = document.getElementsByClassName("cells");
    cells = Array.from(cells);
    cells.forEach(element => {
        const cell = document.getElementById(element.id);
        cell.textContent = '';
    });
    root.addEventListener('click', play);
})
