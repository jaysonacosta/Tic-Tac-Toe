import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // Players
  playerX: player;
  playerO: player;

  // Token
  playerXToken: string = 'X';
  playerOToken: string = 'O';

  // Button Representation
  topLeft: string;
  topMid: string;
  topRight: string;
  midLeft: string;
  midMid: string;
  midRight: string;
  bottomLeft: string;
  bottomMid: string;
  bottomRight: string;

  // Disabling button after click
  disabledTL: boolean = false;
  disabledTM: boolean = false;
  disabledTR: boolean = false;
  disabledML: boolean = false;
  disabledMM: boolean = false;
  disabledMR: boolean = false;
  disabledBL: boolean = false;
  disabledBM: boolean = false;
  disabledBR: boolean = false;

  // Board as an array
  board: string[] = ['','','','','','','','',''];

  // Keeping track of whose turn it is (true - playerX) (false - playerO)
  turn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // Functions that place player token on tile
  //
  // Top Row
  placeTokenTL() {

    if(this.turn) {
      this.topLeft = this.playerXToken;
      this.turn = !this.turn;
      this.disabledTL = true;
      this.board[0] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.topLeft = this.playerOToken;
      this.turn = !this.turn;
      this.disabledTL = true;
      this.board[0] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenTM() {

    if(this.turn) {
      this.topMid = this.playerXToken;
      this.turn = !this.turn;
      this.disabledTM = true;
      this.board[1] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.topMid = this.playerOToken;
      this.turn = !this.turn;
      this.disabledTM = true;
      this.board[1] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenTR() {

    if(this.turn) {
      this.topRight = this.playerXToken;
      this.turn = !this.turn;
      this.disabledTR = true;
      this.board[2] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.topRight = this.playerOToken;
      this.turn = !this.turn;
      this.disabledTR = true;
      this.board[2] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  // Middle Row
  placeTokenML() {

    if(this.turn) {
      this.midLeft = this.playerXToken;
      this.turn = !this.turn;
      this.disabledML = true;
      this.board[3] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.midLeft = this.playerOToken;
      this.turn = !this.turn;
      this.disabledML = true;
      this.board[3] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenMM() {

    if(this.turn) {
      this.midMid = this.playerXToken;
      this.turn = !this.turn;
      this.disabledMM = true;
      this.board[4] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.midMid = this.playerOToken;
      this.turn = !this.turn;
      this.disabledMM = true;
      this.board[4] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenMR() {

    if(this.turn) {
      this.midRight = this.playerXToken;
      this.turn = !this.turn;
      this.disabledMR = true;
      this.board[5] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.midRight = this.playerOToken;
      this.turn = !this.turn;
      this.disabledMR = true;
      this.board[5] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  // Bottom Row
  placeTokenBL() {

    if(this.turn) {
      this.bottomLeft = this.playerXToken;
      this.turn = !this.turn;
      this.disabledBL = true;
      this.board[6] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.bottomLeft = this.playerOToken;
      this.turn = !this.turn;
      this.disabledBL = true;
      this.board[6] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenBM() {

    if(this.turn) {
      this.bottomMid = this.playerXToken;
      this.turn = !this.turn;
      this.disabledBM = true;
      this.board[7] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.bottomMid = this.playerOToken;
      this.turn = !this.turn;
      this.disabledBM = true;
      this.board[7] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }

  placeTokenBR() {

    if(this.turn) {
      this.bottomRight = this.playerXToken;
      this.turn = !this.turn;
      this.disabledBR = true;
      this.board[8] = 'X';
      console.log(this.board);
      this.isWinner();
    } else {
      this.bottomRight = this.playerOToken;
      this.turn = !this.turn;
      this.disabledBR = true;
      this.board[8] = 'O';
      console.log(this.board);
      this.isWinner();
    }
  }
  //
  // End player token functions

  // Checks if there's a winnner on the board
  isWinner() {
    if(this.board[0] == 'X' && this.board[1] == 'X' && this.board[2] == 'X' || 
       this.board[3] == 'X' && this.board[4] == 'X' && this.board[5] == 'X' ||
       this.board[6] == 'X' && this.board[7] == 'X' && this.board[8] == 'X' ||
       this.board[0] == 'X' && this.board[3] == 'X' && this.board[6] == 'X' ||
       this.board[1] == 'X' && this.board[4] == 'X' && this.board[7] == 'X' ||
       this.board[2] == 'X' && this.board[5] == 'X' && this.board[8] == 'X' ||
       this.board[0] == 'X' && this.board[4] == 'X' && this.board[8] == 'X' ||
       this.board[2] == 'X' && this.board[4] == 'X' && this.board[6] == 'X') {
      console.log('X Wins!')
    }
    if(this.board[0] == 'O' && this.board[1] == 'O' && this.board[2] == 'O' || 
       this.board[3] == 'O' && this.board[4] == 'O' && this.board[5] == 'O' ||
       this.board[6] == 'O' && this.board[7] == 'O' && this.board[8] == 'O' ||
       this.board[0] == 'O' && this.board[3] == 'O' && this.board[6] == 'O' ||
       this.board[1] == 'O' && this.board[4] == 'O' && this.board[7] == 'O' ||
       this.board[2] == 'O' && this.board[5] == 'O' && this.board[8] == 'O' ||
       this.board[0] == 'O' && this.board[4] == 'O' && this.board[8] == 'O' ||
       this.board[2] == 'O' && this.board[4] == 'O' && this.board[6] == 'O') {
      console.log('O Wins!')
      alert('O WINS!')
    }

  }

}

export interface player {
  gamesWon: number
}
