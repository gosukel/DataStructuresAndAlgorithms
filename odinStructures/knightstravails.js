class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    makeBoard() {
        let ranks = ["a", "b", "c", "d", "e", "f", "g", "h"];
        let files = ["1", "2", "3", "4", "5", "6", "7", "8"];
        for (let rank of ranks) {
            for (let file of files) {
                let s = `${rank}${file}`;
                this.addVertex(s);
            }
        }
    }

    // KEEP WORKING HERE
    addKnightMoves() {
        let validMoves = {
            // A done
            "a1": ["b3", "c2"],
            "a2": ["c1", "c3", "b4"],
            "a3": ["b1", "c2", "c4", "b5"],
            "a4": ["b2", "c3", "c5", "b6"],
            "a5": ["b3", "c4", "c6", "b7"],
            "a6": ["b4", "c5", "c7", "b8"],
            "a7": ["b5", "c6", "c8"],
            "a8": ["b6", "c7"],
            // B done
            "b1": ["a3", "c3", "d2"],
            "b2": ["d1", "d3", "c4", "a4"],
            "b3": ["a1", "c1", "d2", "d4", "c5", "a5"],
            "b4": ["a2", "c2", "d3", "d5", "c6", "a6"],
            "b5": ["a3", "c3", "d4", "d6", "c7", "a7"],
            "b6": ["a4", "c4", "d5", "d7", "c8", "a8"],
            "b7": ["a5", "c5", "d6", "d8"],
            "b8": ["a6", "c6", "d7"],
            // C done
            "c1": ["a2", "b3", "d3", "e2"],
            "c2": ["a1", "a3", "b4", "d4", "e3", "e1"],
            "c3": ["a2", "a4", "b1", "b5", "d1", "d5", "e2", "e4"],
            "c4": ["a3", "a5", "b2", "b6", "d2", "d6", "e3", "e5"],
            "c5": ["a4", "a6", "b3", "b7", "d3", "d7", "e4", "e6"],
            "c6": ["a5", "a7", "b4", "b8", "d4", "d8", "e5", "e7"],
            "c7": ["a6", "a8", "b5", "d5", "e6", "e8"],
            "c8": ["a7", "b6", "d6", "e7"],
            // D done
            "d1": ["b2", "c3", "e3", "f2"],
            "d2": ["b1", "b3", "c4", "e4", "f3", "f1"],
            "d3": ["b2", "b4", "c1", "c5", "e1", "e5", "f2", "f4"],
            "d4": ["b3", "b5", "c2", "c6", "e2", "e6", "f3", "f5"],
            "d5": ["b4", "b6", "c3", "c7", "e3", "e7", "f4", "f6"],
            "d6": ["b5", "b7", "c4", "c8", "e4", "e8", "f5", "f7"],
            "d7": ["b6", "b8", "c5", "e5", "f6", "f8"],
            "d8": ["b7", "c6", "e6", "f7"],
            // E done
            "e1": ["c2", "d3", "f3", "g2"],
            "e2": ["c1", "c3", "d4", "f4", "g3", "g1"],
            "e3": ["c2", "c4", "d1", "d5", "f1", "f5", "g2", "g4"],
            "e4": ["c3", "c5", "d2", "d6", "f2", "f6", "g3", "g5"],
            "e5": ["c4", "c6", "d3", "d7", "f3", "f7", "g4", "g6"],
            "e6": ["c5", "c7", "d4", "d8", "f4", "f8", "g5", "g7"],
            "e7": ["c6", "c8", "d5", "f5", "g6", "g8"],
            "e8": ["c7", "d6", "f6", "g7"],
            // F done
            "f1": ["d2", "e3", "g3", "h2"],
            "f2": ["d1", "d3", "e4", "g4", "h3", "h1"],
            "f3": ["d2", "d4", "e1", "e5", "g1", "g5", "h2", "h4"],
            "f4": ["d3", "d5", "e2", "e6", "g2", "g6", "h3", "h5"],
            "f5": ["d4", "d6", "e3", "e7", "g3", "g7", "h4", "h6"],
            "f6": ["d5", "d7", "e4", "e8", "g4", "g8", "h5", "h7"],
            "f7": ["d6", "d8", "e5", "g5", "h6", "h8"],
            "f8": ["d7", "e6", "g6", "h7"],
            // G done
            "g1": ["e2", "f3", "h3"],
            "g2": ["e1", "e3", "f4", "h4"],
            "g3": ["e2", "e4", "f1", "f5", "h1", "h5"],
            "g4": ["e3", "e5", "f2", "f6", "h2", "h6"],
            "g5": ["e4", "e6", "f3", "f7", "h3", "h7"],
            "g6": ["e5", "e7", "f4", "f8", "h4", "h8"],
            "b7": ["e6", "e8", "f5", "h5"],
            "b8": ["e7", "f6", "h6"],
            // H done
            "h1": ["f2", "g3"],
            "h2": ["f1", "f3", "g4"],
            "h3": ["f2", "f4", "g1", "g5"],
            "h4": ["f3", "f5", "g2", "g6"],
            "h5": ["f4", "f6", "g3", "g7"],
            "h6": ["f5", "f7", "g4", "g8"],
            "h7": ["f6", "f8", "g5"],
            "h8": ["f7", "g6"],
        }
        let moveKeys = Object.keys(validMoves);
        for (let key of moveKeys) {
            let newMoves = validMoves[key];
            // console.log(key);
            for (let move of newMoves) {
                let curMoves = this.adjacencyList[key];
            }
        }
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let newBoard = new Graph();
newBoard.makeBoard();
// console.log(newBoard);
newBoard.addKnightMoves();