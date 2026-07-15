'use strict';
window.DIJKSTRA_DATA = {
  "game": "Dijkstra Minimum-Path Challenge",
  "version": "1.0",
  "description": "A five-level pathfinding game. In each puzzle, the player selects an ordered sequence of adjacent vertices representing the minimum-total-weight path from the given start vertex to the given end vertex.",
  "rules": {
    "graphType": "undirected",
    "edgeWeights": "positive integers",
    "playerInput": "ordered sequence of vertex IDs",
    "pathRequirements": [
      "The first selected vertex must equal startVertex.",
      "The last selected vertex must equal endVertex.",
      "Every consecutive pair must be connected by an edge.",
      "The sum of selected edge weights must equal solution.totalWeight."
    ]
  },
  "summary": {
    "levelCount": 5,
    "totalPuzzleCount": 20,
    "allGraphsConnected": true,
    "allPuzzlesHaveUniqueShortestPaths": true
  },
  "levels": [
    {
      "level": 1,
      "vertexCount": 4,
      "puzzleCount": 2,
      "puzzles": [
        {
          "id": "L1P1",
          "title": "Level 1 - Puzzle 1",
          "difficulty": 1,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 376,
                "y": 494
              },
              {
                "id": "B",
                "label": "B",
                "x": 218,
                "y": 278
              },
              {
                "id": "C",
                "label": "C",
                "x": 425,
                "y": 96
              },
              {
                "id": "D",
                "label": "D",
                "x": 593,
                "y": 324
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 13
              },
              {
                "from": "A",
                "to": "C",
                "weight": 17
              },
              {
                "from": "A",
                "to": "D",
                "weight": 14
              },
              {
                "from": "B",
                "to": "C",
                "weight": 8
              }
            ]
          },
          "startVertex": "B",
          "endVertex": "D",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from B to D.",
          "solution": {
            "path": [
              "B",
              "A",
              "D"
            ],
            "totalWeight": 27,
            "edgeCount": 2,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L1P2",
          "title": "Level 1 - Puzzle 2",
          "difficulty": 1,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 316,
                "y": 488
              },
              {
                "id": "B",
                "label": "B",
                "x": 223,
                "y": 221
              },
              {
                "id": "C",
                "label": "C",
                "x": 474,
                "y": 134
              },
              {
                "id": "D",
                "label": "D",
                "x": 587,
                "y": 383
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 9
              },
              {
                "from": "A",
                "to": "D",
                "weight": 8
              },
              {
                "from": "B",
                "to": "C",
                "weight": 4
              },
              {
                "from": "C",
                "to": "D",
                "weight": 9
              }
            ]
          },
          "startVertex": "B",
          "endVertex": "D",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from B to D.",
          "solution": {
            "path": [
              "B",
              "C",
              "D"
            ],
            "totalWeight": 13,
            "edgeCount": 2,
            "uniqueShortestPath": true
          }
        }
      ]
    },
    {
      "level": 2,
      "vertexCount": 6,
      "puzzleCount": 3,
      "puzzles": [
        {
          "id": "L2P1",
          "title": "Level 2 - Puzzle 1",
          "difficulty": 2,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 389,
                "y": 92
              },
              {
                "id": "B",
                "label": "B",
                "x": 564,
                "y": 193
              },
              {
                "id": "C",
                "label": "C",
                "x": 595,
                "y": 399
              },
              {
                "id": "D",
                "label": "D",
                "x": 411,
                "y": 507
              },
              {
                "id": "E",
                "label": "E",
                "x": 236,
                "y": 406
              },
              {
                "id": "F",
                "label": "F",
                "x": 206,
                "y": 201
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 6
              },
              {
                "from": "A",
                "to": "C",
                "weight": 5
              },
              {
                "from": "B",
                "to": "C",
                "weight": 11
              },
              {
                "from": "B",
                "to": "E",
                "weight": 12
              },
              {
                "from": "C",
                "to": "D",
                "weight": 6
              },
              {
                "from": "D",
                "to": "E",
                "weight": 14
              },
              {
                "from": "D",
                "to": "F",
                "weight": 12
              },
              {
                "from": "E",
                "to": "F",
                "weight": 13
              }
            ]
          },
          "startVertex": "A",
          "endVertex": "F",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from A to F.",
          "solution": {
            "path": [
              "A",
              "C",
              "D",
              "F"
            ],
            "totalWeight": 23,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L2P2",
          "title": "Level 2 - Puzzle 2",
          "difficulty": 2,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 453,
                "y": 88
              },
              {
                "id": "B",
                "label": "B",
                "x": 599,
                "y": 243
              },
              {
                "id": "C",
                "label": "C",
                "x": 540,
                "y": 435
              },
              {
                "id": "D",
                "label": "D",
                "x": 347,
                "y": 512
              },
              {
                "id": "E",
                "label": "E",
                "x": 202,
                "y": 357
              },
              {
                "id": "F",
                "label": "F",
                "x": 260,
                "y": 165
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 14
              },
              {
                "from": "A",
                "to": "C",
                "weight": 9
              },
              {
                "from": "B",
                "to": "C",
                "weight": 17
              },
              {
                "from": "B",
                "to": "D",
                "weight": 11
              },
              {
                "from": "B",
                "to": "E",
                "weight": 16
              },
              {
                "from": "C",
                "to": "E",
                "weight": 11
              },
              {
                "from": "C",
                "to": "F",
                "weight": 2
              },
              {
                "from": "E",
                "to": "F",
                "weight": 2
              }
            ]
          },
          "startVertex": "D",
          "endVertex": "F",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from D to F.",
          "solution": {
            "path": [
              "D",
              "B",
              "E",
              "F"
            ],
            "totalWeight": 29,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L2P3",
          "title": "Level 2 - Puzzle 3",
          "difficulty": 2,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 500,
                "y": 133
              },
              {
                "id": "B",
                "label": "B",
                "x": 618,
                "y": 304
              },
              {
                "id": "C",
                "label": "C",
                "x": 500,
                "y": 480
              },
              {
                "id": "D",
                "label": "D",
                "x": 300,
                "y": 466
              },
              {
                "id": "E",
                "label": "E",
                "x": 183,
                "y": 296
              },
              {
                "id": "F",
                "label": "F",
                "x": 301,
                "y": 121
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 13
              },
              {
                "from": "A",
                "to": "D",
                "weight": 2
              },
              {
                "from": "A",
                "to": "F",
                "weight": 2
              },
              {
                "from": "B",
                "to": "C",
                "weight": 14
              },
              {
                "from": "B",
                "to": "D",
                "weight": 11
              },
              {
                "from": "B",
                "to": "E",
                "weight": 15
              },
              {
                "from": "C",
                "to": "E",
                "weight": 7
              },
              {
                "from": "D",
                "to": "E",
                "weight": 13
              },
              {
                "from": "D",
                "to": "F",
                "weight": 4
              }
            ]
          },
          "startVertex": "A",
          "endVertex": "C",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from A to C.",
          "solution": {
            "path": [
              "A",
              "D",
              "E",
              "C"
            ],
            "totalWeight": 22,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        }
      ]
    },
    {
      "level": 3,
      "vertexCount": 8,
      "puzzleCount": 4,
      "puzzles": [
        {
          "id": "L3P1",
          "title": "Level 3 - Puzzle 1",
          "difficulty": 3,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 450,
                "y": 515
              },
              {
                "id": "B",
                "label": "B",
                "x": 289,
                "y": 477
              },
              {
                "id": "C",
                "label": "C",
                "x": 208,
                "y": 344
              },
              {
                "id": "D",
                "label": "D",
                "x": 213,
                "y": 183
              },
              {
                "id": "E",
                "label": "E",
                "x": 353,
                "y": 97
              },
              {
                "id": "F",
                "label": "F",
                "x": 504,
                "y": 134
              },
              {
                "id": "G",
                "label": "G",
                "x": 613,
                "y": 251
              },
              {
                "id": "H",
                "label": "H",
                "x": 576,
                "y": 410
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 6
              },
              {
                "from": "A",
                "to": "C",
                "weight": 8
              },
              {
                "from": "A",
                "to": "D",
                "weight": 4
              },
              {
                "from": "A",
                "to": "G",
                "weight": 2
              },
              {
                "from": "B",
                "to": "E",
                "weight": 8
              },
              {
                "from": "C",
                "to": "D",
                "weight": 4
              },
              {
                "from": "C",
                "to": "F",
                "weight": 8
              },
              {
                "from": "C",
                "to": "G",
                "weight": 11
              },
              {
                "from": "D",
                "to": "F",
                "weight": 5
              },
              {
                "from": "D",
                "to": "G",
                "weight": 4
              },
              {
                "from": "E",
                "to": "F",
                "weight": 18
              },
              {
                "from": "F",
                "to": "H",
                "weight": 14
              }
            ]
          },
          "startVertex": "E",
          "endVertex": "G",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from E to G.",
          "solution": {
            "path": [
              "E",
              "B",
              "A",
              "G"
            ],
            "totalWeight": 16,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L3P2",
          "title": "Level 3 - Puzzle 2",
          "difficulty": 3,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 386,
                "y": 497
              },
              {
                "id": "B",
                "label": "B",
                "x": 234,
                "y": 444
              },
              {
                "id": "C",
                "label": "C",
                "x": 193,
                "y": 285
              },
              {
                "id": "D",
                "label": "D",
                "x": 271,
                "y": 152
              },
              {
                "id": "E",
                "label": "E",
                "x": 415,
                "y": 82
              },
              {
                "id": "F",
                "label": "F",
                "x": 556,
                "y": 164
              },
              {
                "id": "G",
                "label": "G",
                "x": 595,
                "y": 314
              },
              {
                "id": "H",
                "label": "H",
                "x": 543,
                "y": 465
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 4
              },
              {
                "from": "A",
                "to": "D",
                "weight": 8
              },
              {
                "from": "A",
                "to": "E",
                "weight": 14
              },
              {
                "from": "A",
                "to": "F",
                "weight": 13
              },
              {
                "from": "B",
                "to": "C",
                "weight": 9
              },
              {
                "from": "B",
                "to": "G",
                "weight": 12
              },
              {
                "from": "D",
                "to": "E",
                "weight": 3
              },
              {
                "from": "D",
                "to": "G",
                "weight": 8
              },
              {
                "from": "E",
                "to": "G",
                "weight": 15
              },
              {
                "from": "E",
                "to": "H",
                "weight": 2
              },
              {
                "from": "F",
                "to": "G",
                "weight": 9
              },
              {
                "from": "G",
                "to": "H",
                "weight": 3
              }
            ]
          },
          "startVertex": "B",
          "endVertex": "E",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from B to E.",
          "solution": {
            "path": [
              "B",
              "A",
              "D",
              "E"
            ],
            "totalWeight": 15,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L3P3",
          "title": "Level 3 - Puzzle 3",
          "difficulty": 3,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 325,
                "y": 494
              },
              {
                "id": "B",
                "label": "B",
                "x": 221,
                "y": 380
              },
              {
                "id": "C",
                "label": "C",
                "x": 196,
                "y": 222
              },
              {
                "id": "D",
                "label": "D",
                "x": 316,
                "y": 111
              },
              {
                "id": "E",
                "label": "E",
                "x": 470,
                "y": 118
              },
              {
                "id": "F",
                "label": "F",
                "x": 599,
                "y": 211
              },
              {
                "id": "G",
                "label": "G",
                "x": 592,
                "y": 374
              },
              {
                "id": "H",
                "label": "H",
                "x": 493,
                "y": 509
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 6
              },
              {
                "from": "A",
                "to": "E",
                "weight": 13
              },
              {
                "from": "A",
                "to": "F",
                "weight": 16
              },
              {
                "from": "A",
                "to": "G",
                "weight": 8
              },
              {
                "from": "B",
                "to": "C",
                "weight": 4
              },
              {
                "from": "C",
                "to": "D",
                "weight": 3
              },
              {
                "from": "C",
                "to": "G",
                "weight": 5
              },
              {
                "from": "D",
                "to": "E",
                "weight": 8
              },
              {
                "from": "D",
                "to": "G",
                "weight": 16
              },
              {
                "from": "E",
                "to": "F",
                "weight": 7
              },
              {
                "from": "E",
                "to": "G",
                "weight": 10
              },
              {
                "from": "F",
                "to": "H",
                "weight": 9
              },
              {
                "from": "G",
                "to": "H",
                "weight": 7
              }
            ]
          },
          "startVertex": "C",
          "endVertex": "F",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from C to F.",
          "solution": {
            "path": [
              "C",
              "D",
              "E",
              "F"
            ],
            "totalWeight": 18,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L3P4",
          "title": "Level 3 - Puzzle 4",
          "difficulty": 3,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 265,
                "y": 473
              },
              {
                "id": "B",
                "label": "B",
                "x": 195,
                "y": 325
              },
              {
                "id": "C",
                "label": "C",
                "x": 246,
                "y": 180
              },
              {
                "id": "D",
                "label": "D",
                "x": 373,
                "y": 84
              },
              {
                "id": "E",
                "label": "E",
                "x": 527,
                "y": 138
              },
              {
                "id": "F",
                "label": "F",
                "x": 627,
                "y": 272
              },
              {
                "id": "G",
                "label": "G",
                "x": 571,
                "y": 434
              },
              {
                "id": "H",
                "label": "H",
                "x": 425,
                "y": 503
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 11
              },
              {
                "from": "A",
                "to": "D",
                "weight": 7
              },
              {
                "from": "A",
                "to": "G",
                "weight": 13
              },
              {
                "from": "B",
                "to": "C",
                "weight": 13
              },
              {
                "from": "B",
                "to": "E",
                "weight": 6
              },
              {
                "from": "C",
                "to": "D",
                "weight": 7
              },
              {
                "from": "C",
                "to": "E",
                "weight": 13
              },
              {
                "from": "C",
                "to": "F",
                "weight": 9
              },
              {
                "from": "C",
                "to": "G",
                "weight": 7
              },
              {
                "from": "D",
                "to": "G",
                "weight": 7
              },
              {
                "from": "E",
                "to": "F",
                "weight": 13
              },
              {
                "from": "F",
                "to": "H",
                "weight": 13
              },
              {
                "from": "G",
                "to": "H",
                "weight": 6
              }
            ]
          },
          "startVertex": "B",
          "endVertex": "H",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from B to H.",
          "solution": {
            "path": [
              "B",
              "C",
              "G",
              "H"
            ],
            "totalWeight": 26,
            "edgeCount": 3,
            "uniqueShortestPath": true
          }
        }
      ]
    },
    {
      "level": 4,
      "vertexCount": 10,
      "puzzleCount": 5,
      "puzzles": [
        {
          "id": "L4P1",
          "title": "Level 4 - Puzzle 1",
          "difficulty": 4,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 309,
                "y": 85
              },
              {
                "id": "B",
                "label": "B",
                "x": 450,
                "y": 84
              },
              {
                "id": "C",
                "label": "C",
                "x": 558,
                "y": 162
              },
              {
                "id": "D",
                "label": "D",
                "x": 632,
                "y": 280
              },
              {
                "id": "E",
                "label": "E",
                "x": 589,
                "y": 414
              },
              {
                "id": "F",
                "label": "F",
                "x": 482,
                "y": 492
              },
              {
                "id": "G",
                "label": "G",
                "x": 348,
                "y": 526
              },
              {
                "id": "H",
                "label": "H",
                "x": 234,
                "y": 444
              },
              {
                "id": "I",
                "label": "I",
                "x": 193,
                "y": 318
              },
              {
                "id": "J",
                "label": "J",
                "x": 202,
                "y": 181
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 5
              },
              {
                "from": "A",
                "to": "C",
                "weight": 10
              },
              {
                "from": "A",
                "to": "D",
                "weight": 11
              },
              {
                "from": "A",
                "to": "E",
                "weight": 7
              },
              {
                "from": "A",
                "to": "G",
                "weight": 2
              },
              {
                "from": "B",
                "to": "D",
                "weight": 14
              },
              {
                "from": "B",
                "to": "F",
                "weight": 5
              },
              {
                "from": "B",
                "to": "J",
                "weight": 14
              },
              {
                "from": "C",
                "to": "I",
                "weight": 11
              },
              {
                "from": "C",
                "to": "J",
                "weight": 17
              },
              {
                "from": "D",
                "to": "F",
                "weight": 13
              },
              {
                "from": "D",
                "to": "H",
                "weight": 14
              },
              {
                "from": "E",
                "to": "H",
                "weight": 3
              },
              {
                "from": "F",
                "to": "G",
                "weight": 4
              },
              {
                "from": "F",
                "to": "I",
                "weight": 18
              },
              {
                "from": "I",
                "to": "J",
                "weight": 4
              }
            ]
          },
          "startVertex": "F",
          "endVertex": "H",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from F to H.",
          "solution": {
            "path": [
              "F",
              "G",
              "A",
              "E",
              "H"
            ],
            "totalWeight": 16,
            "edgeCount": 4,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L4P2",
          "title": "Level 4 - Puzzle 2",
          "difficulty": 4,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 378,
                "y": 91
              },
              {
                "id": "B",
                "label": "B",
                "x": 516,
                "y": 98
              },
              {
                "id": "C",
                "label": "C",
                "x": 602,
                "y": 210
              },
              {
                "id": "D",
                "label": "D",
                "x": 604,
                "y": 343
              },
              {
                "id": "E",
                "label": "E",
                "x": 555,
                "y": 472
              },
              {
                "id": "F",
                "label": "F",
                "x": 423,
                "y": 519
              },
              {
                "id": "G",
                "label": "G",
                "x": 296,
                "y": 480
              },
              {
                "id": "H",
                "label": "H",
                "x": 189,
                "y": 394
              },
              {
                "id": "I",
                "label": "I",
                "x": 186,
                "y": 254
              },
              {
                "id": "J",
                "label": "J",
                "x": 261,
                "y": 146
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 3
              },
              {
                "from": "A",
                "to": "C",
                "weight": 2
              },
              {
                "from": "A",
                "to": "D",
                "weight": 5
              },
              {
                "from": "A",
                "to": "G",
                "weight": 9
              },
              {
                "from": "A",
                "to": "I",
                "weight": 17
              },
              {
                "from": "B",
                "to": "F",
                "weight": 7
              },
              {
                "from": "B",
                "to": "H",
                "weight": 6
              },
              {
                "from": "B",
                "to": "J",
                "weight": 10
              },
              {
                "from": "C",
                "to": "E",
                "weight": 7
              },
              {
                "from": "C",
                "to": "F",
                "weight": 3
              },
              {
                "from": "C",
                "to": "G",
                "weight": 5
              },
              {
                "from": "D",
                "to": "H",
                "weight": 12
              },
              {
                "from": "D",
                "to": "I",
                "weight": 6
              },
              {
                "from": "E",
                "to": "G",
                "weight": 18
              },
              {
                "from": "F",
                "to": "J",
                "weight": 17
              },
              {
                "from": "H",
                "to": "J",
                "weight": 6
              }
            ]
          },
          "startVertex": "F",
          "endVertex": "I",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from F to I.",
          "solution": {
            "path": [
              "F",
              "C",
              "A",
              "D",
              "I"
            ],
            "totalWeight": 16,
            "edgeCount": 4,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L4P3",
          "title": "Level 4 - Puzzle 3",
          "difficulty": 4,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 442,
                "y": 83
              },
              {
                "id": "B",
                "label": "B",
                "x": 553,
                "y": 157
              },
              {
                "id": "C",
                "label": "C",
                "x": 630,
                "y": 272
              },
              {
                "id": "D",
                "label": "D",
                "x": 592,
                "y": 407
              },
              {
                "id": "E",
                "label": "E",
                "x": 488,
                "y": 489
              },
              {
                "id": "F",
                "label": "F",
                "x": 356,
                "y": 527
              },
              {
                "id": "G",
                "label": "G",
                "x": 240,
                "y": 449
              },
              {
                "id": "H",
                "label": "H",
                "x": 195,
                "y": 325
              },
              {
                "id": "I",
                "label": "I",
                "x": 199,
                "y": 188
              },
              {
                "id": "J",
                "label": "J",
                "x": 308,
                "y": 102
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 11
              },
              {
                "from": "A",
                "to": "D",
                "weight": 12
              },
              {
                "from": "A",
                "to": "E",
                "weight": 11
              },
              {
                "from": "A",
                "to": "F",
                "weight": 4
              },
              {
                "from": "A",
                "to": "J",
                "weight": 10
              },
              {
                "from": "B",
                "to": "C",
                "weight": 5
              },
              {
                "from": "B",
                "to": "E",
                "weight": 5
              },
              {
                "from": "B",
                "to": "F",
                "weight": 3
              },
              {
                "from": "B",
                "to": "H",
                "weight": 14
              },
              {
                "from": "C",
                "to": "G",
                "weight": 17
              },
              {
                "from": "D",
                "to": "E",
                "weight": 9
              },
              {
                "from": "D",
                "to": "G",
                "weight": 3
              },
              {
                "from": "D",
                "to": "J",
                "weight": 9
              },
              {
                "from": "E",
                "to": "G",
                "weight": 18
              },
              {
                "from": "F",
                "to": "G",
                "weight": 4
              },
              {
                "from": "F",
                "to": "H",
                "weight": 11
              },
              {
                "from": "F",
                "to": "I",
                "weight": 8
              }
            ]
          },
          "startVertex": "C",
          "endVertex": "D",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from C to D.",
          "solution": {
            "path": [
              "C",
              "B",
              "F",
              "G",
              "D"
            ],
            "totalWeight": 15,
            "edgeCount": 4,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L4P4",
          "title": "Level 4 - Puzzle 4",
          "difficulty": 4,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 509,
                "y": 95
              },
              {
                "id": "B",
                "label": "B",
                "x": 598,
                "y": 204
              },
              {
                "id": "C",
                "label": "C",
                "x": 605,
                "y": 336
              },
              {
                "id": "D",
                "label": "D",
                "x": 560,
                "y": 466
              },
              {
                "id": "E",
                "label": "E",
                "x": 430,
                "y": 517
              },
              {
                "id": "F",
                "label": "F",
                "x": 303,
                "y": 483
              },
              {
                "id": "G",
                "label": "G",
                "x": 193,
                "y": 401
              },
              {
                "id": "H",
                "label": "H",
                "x": 185,
                "y": 262
              },
              {
                "id": "I",
                "label": "I",
                "x": 257,
                "y": 152
              },
              {
                "id": "J",
                "label": "J",
                "x": 368,
                "y": 73
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 14
              },
              {
                "from": "A",
                "to": "C",
                "weight": 2
              },
              {
                "from": "A",
                "to": "D",
                "weight": 11
              },
              {
                "from": "A",
                "to": "H",
                "weight": 12
              },
              {
                "from": "A",
                "to": "I",
                "weight": 18
              },
              {
                "from": "B",
                "to": "C",
                "weight": 4
              },
              {
                "from": "B",
                "to": "F",
                "weight": 4
              },
              {
                "from": "B",
                "to": "G",
                "weight": 4
              },
              {
                "from": "B",
                "to": "I",
                "weight": 7
              },
              {
                "from": "D",
                "to": "E",
                "weight": 6
              },
              {
                "from": "D",
                "to": "F",
                "weight": 16
              },
              {
                "from": "D",
                "to": "H",
                "weight": 10
              },
              {
                "from": "D",
                "to": "I",
                "weight": 15
              },
              {
                "from": "E",
                "to": "G",
                "weight": 8
              },
              {
                "from": "F",
                "to": "G",
                "weight": 13
              },
              {
                "from": "H",
                "to": "J",
                "weight": 9
              },
              {
                "from": "I",
                "to": "J",
                "weight": 4
              }
            ]
          },
          "startVertex": "G",
          "endVertex": "H",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from G to H.",
          "solution": {
            "path": [
              "G",
              "B",
              "C",
              "A",
              "H"
            ],
            "totalWeight": 22,
            "edgeCount": 4,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L4P5",
          "title": "Level 4 - Puzzle 5",
          "difficulty": 4,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 547,
                "y": 153
              },
              {
                "id": "B",
                "label": "B",
                "x": 628,
                "y": 264
              },
              {
                "id": "C",
                "label": "C",
                "x": 595,
                "y": 399
              },
              {
                "id": "D",
                "label": "D",
                "x": 494,
                "y": 484
              },
              {
                "id": "E",
                "label": "E",
                "x": 364,
                "y": 527
              },
              {
                "id": "F",
                "label": "F",
                "x": 246,
                "y": 454
              },
              {
                "id": "G",
                "label": "G",
                "x": 197,
                "y": 332
              },
              {
                "id": "H",
                "label": "H",
                "x": 196,
                "y": 196
              },
              {
                "id": "I",
                "label": "I",
                "x": 301,
                "y": 107
              },
              {
                "id": "J",
                "label": "J",
                "x": 432,
                "y": 98
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 14
              },
              {
                "from": "A",
                "to": "E",
                "weight": 10
              },
              {
                "from": "A",
                "to": "F",
                "weight": 3
              },
              {
                "from": "A",
                "to": "G",
                "weight": 13
              },
              {
                "from": "A",
                "to": "J",
                "weight": 7
              },
              {
                "from": "B",
                "to": "C",
                "weight": 4
              },
              {
                "from": "B",
                "to": "D",
                "weight": 18
              },
              {
                "from": "B",
                "to": "H",
                "weight": 4
              },
              {
                "from": "B",
                "to": "I",
                "weight": 8
              },
              {
                "from": "C",
                "to": "D",
                "weight": 5
              },
              {
                "from": "C",
                "to": "F",
                "weight": 14
              },
              {
                "from": "D",
                "to": "F",
                "weight": 18
              },
              {
                "from": "D",
                "to": "I",
                "weight": 2
              },
              {
                "from": "D",
                "to": "J",
                "weight": 3
              },
              {
                "from": "F",
                "to": "G",
                "weight": 7
              },
              {
                "from": "F",
                "to": "H",
                "weight": 13
              },
              {
                "from": "G",
                "to": "I",
                "weight": 14
              },
              {
                "from": "I",
                "to": "J",
                "weight": 3
              }
            ]
          },
          "startVertex": "C",
          "endVertex": "E",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from C to E.",
          "solution": {
            "path": [
              "C",
              "D",
              "J",
              "A",
              "E"
            ],
            "totalWeight": 25,
            "edgeCount": 4,
            "uniqueShortestPath": true
          }
        }
      ]
    },
    {
      "level": 5,
      "vertexCount": 12,
      "puzzleCount": 6,
      "puzzles": [
        {
          "id": "L5P1",
          "title": "Level 5 - Puzzle 1",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 515,
                "y": 478
              },
              {
                "id": "B",
                "label": "B",
                "x": 412,
                "y": 535
              },
              {
                "id": "C",
                "label": "C",
                "x": 299,
                "y": 499
              },
              {
                "id": "D",
                "label": "D",
                "x": 223,
                "y": 415
              },
              {
                "id": "E",
                "label": "E",
                "x": 166,
                "y": 312
              },
              {
                "id": "F",
                "label": "F",
                "x": 202,
                "y": 199
              },
              {
                "id": "G",
                "label": "G",
                "x": 267,
                "y": 95
              },
              {
                "id": "H",
                "label": "H",
                "x": 388,
                "y": 67
              },
              {
                "id": "I",
                "label": "I",
                "x": 500,
                "y": 103
              },
              {
                "id": "J",
                "label": "J",
                "x": 605,
                "y": 167
              },
              {
                "id": "K",
                "label": "K",
                "x": 632,
                "y": 288
              },
              {
                "id": "L",
                "label": "L",
                "x": 596,
                "y": 400
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 6
              },
              {
                "from": "A",
                "to": "C",
                "weight": 8
              },
              {
                "from": "A",
                "to": "D",
                "weight": 4
              },
              {
                "from": "A",
                "to": "L",
                "weight": 10
              },
              {
                "from": "B",
                "to": "E",
                "weight": 14
              },
              {
                "from": "B",
                "to": "F",
                "weight": 2
              },
              {
                "from": "B",
                "to": "J",
                "weight": 6
              },
              {
                "from": "B",
                "to": "K",
                "weight": 11
              },
              {
                "from": "C",
                "to": "D",
                "weight": 5
              },
              {
                "from": "D",
                "to": "H",
                "weight": 2
              },
              {
                "from": "D",
                "to": "L",
                "weight": 2
              },
              {
                "from": "E",
                "to": "F",
                "weight": 5
              },
              {
                "from": "E",
                "to": "G",
                "weight": 4
              },
              {
                "from": "E",
                "to": "H",
                "weight": 3
              },
              {
                "from": "F",
                "to": "G",
                "weight": 10
              },
              {
                "from": "F",
                "to": "H",
                "weight": 2
              },
              {
                "from": "F",
                "to": "I",
                "weight": 7
              },
              {
                "from": "G",
                "to": "J",
                "weight": 10
              },
              {
                "from": "G",
                "to": "K",
                "weight": 11
              },
              {
                "from": "J",
                "to": "K",
                "weight": 16
              }
            ]
          },
          "startVertex": "J",
          "endVertex": "L",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from J to L.",
          "solution": {
            "path": [
              "J",
              "B",
              "F",
              "H",
              "D",
              "L"
            ],
            "totalWeight": 14,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L5P2",
          "title": "Level 5 - Puzzle 2",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 461,
                "y": 514
              },
              {
                "id": "B",
                "label": "B",
                "x": 349,
                "y": 505
              },
              {
                "id": "C",
                "label": "C",
                "x": 237,
                "y": 468
              },
              {
                "id": "D",
                "label": "D",
                "x": 187,
                "y": 361
              },
              {
                "id": "E",
                "label": "E",
                "x": 162,
                "y": 241
              },
              {
                "id": "F",
                "label": "F",
                "x": 232,
                "y": 138
              },
              {
                "id": "G",
                "label": "G",
                "x": 339,
                "y": 88
              },
              {
                "id": "H",
                "label": "H",
                "x": 459,
                "y": 63
              },
              {
                "id": "I",
                "label": "I",
                "x": 561,
                "y": 133
              },
              {
                "id": "J",
                "label": "J",
                "x": 611,
                "y": 239
              },
              {
                "id": "K",
                "label": "K",
                "x": 636,
                "y": 359
              },
              {
                "id": "L",
                "label": "L",
                "x": 566,
                "y": 460
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 2
              },
              {
                "from": "A",
                "to": "C",
                "weight": 2
              },
              {
                "from": "A",
                "to": "D",
                "weight": 10
              },
              {
                "from": "A",
                "to": "F",
                "weight": 2
              },
              {
                "from": "A",
                "to": "J",
                "weight": 16
              },
              {
                "from": "B",
                "to": "C",
                "weight": 10
              },
              {
                "from": "B",
                "to": "K",
                "weight": 7
              },
              {
                "from": "C",
                "to": "E",
                "weight": 3
              },
              {
                "from": "C",
                "to": "H",
                "weight": 5
              },
              {
                "from": "C",
                "to": "I",
                "weight": 7
              },
              {
                "from": "C",
                "to": "L",
                "weight": 8
              },
              {
                "from": "D",
                "to": "G",
                "weight": 11
              },
              {
                "from": "D",
                "to": "K",
                "weight": 9
              },
              {
                "from": "D",
                "to": "L",
                "weight": 9
              },
              {
                "from": "E",
                "to": "F",
                "weight": 8
              },
              {
                "from": "E",
                "to": "G",
                "weight": 5
              },
              {
                "from": "E",
                "to": "J",
                "weight": 13
              },
              {
                "from": "F",
                "to": "H",
                "weight": 16
              },
              {
                "from": "H",
                "to": "J",
                "weight": 9
              },
              {
                "from": "I",
                "to": "L",
                "weight": 5
              }
            ]
          },
          "startVertex": "G",
          "endVertex": "K",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from G to K.",
          "solution": {
            "path": [
              "G",
              "E",
              "C",
              "A",
              "B",
              "K"
            ],
            "totalWeight": 19,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L5P3",
          "title": "Level 5 - Puzzle 3",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 396,
                "y": 534
              },
              {
                "id": "B",
                "label": "B",
                "x": 286,
                "y": 490
              },
              {
                "id": "C",
                "label": "C",
                "x": 186,
                "y": 419
              },
              {
                "id": "D",
                "label": "D",
                "x": 167,
                "y": 296
              },
              {
                "id": "E",
                "label": "E",
                "x": 211,
                "y": 186
              },
              {
                "id": "F",
                "label": "F",
                "x": 282,
                "y": 87
              },
              {
                "id": "G",
                "label": "G",
                "x": 404,
                "y": 68
              },
              {
                "id": "H",
                "label": "H",
                "x": 513,
                "y": 111
              },
              {
                "id": "I",
                "label": "I",
                "x": 613,
                "y": 182
              },
              {
                "id": "J",
                "label": "J",
                "x": 631,
                "y": 304
              },
              {
                "id": "K",
                "label": "K",
                "x": 588,
                "y": 413
              },
              {
                "id": "L",
                "label": "L",
                "x": 517,
                "y": 512
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 13
              },
              {
                "from": "A",
                "to": "D",
                "weight": 3
              },
              {
                "from": "A",
                "to": "F",
                "weight": 17
              },
              {
                "from": "A",
                "to": "H",
                "weight": 3
              },
              {
                "from": "A",
                "to": "J",
                "weight": 8
              },
              {
                "from": "B",
                "to": "C",
                "weight": 3
              },
              {
                "from": "B",
                "to": "F",
                "weight": 9
              },
              {
                "from": "B",
                "to": "G",
                "weight": 11
              },
              {
                "from": "C",
                "to": "D",
                "weight": 6
              },
              {
                "from": "C",
                "to": "E",
                "weight": 12
              },
              {
                "from": "C",
                "to": "F",
                "weight": 7
              },
              {
                "from": "C",
                "to": "H",
                "weight": 6
              },
              {
                "from": "D",
                "to": "H",
                "weight": 10
              },
              {
                "from": "D",
                "to": "J",
                "weight": 12
              },
              {
                "from": "D",
                "to": "K",
                "weight": 6
              },
              {
                "from": "E",
                "to": "I",
                "weight": 13
              },
              {
                "from": "E",
                "to": "K",
                "weight": 11
              },
              {
                "from": "F",
                "to": "K",
                "weight": 8
              },
              {
                "from": "F",
                "to": "L",
                "weight": 13
              },
              {
                "from": "G",
                "to": "K",
                "weight": 8
              },
              {
                "from": "J",
                "to": "L",
                "weight": 7
              }
            ]
          },
          "startVertex": "I",
          "endVertex": "J",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from I to J.",
          "solution": {
            "path": [
              "I",
              "E",
              "K",
              "D",
              "A",
              "J"
            ],
            "totalWeight": 41,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L5P4",
          "title": "Level 5 - Puzzle 4",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 324,
                "y": 533
              },
              {
                "id": "B",
                "label": "B",
                "x": 227,
                "y": 456
              },
              {
                "id": "C",
                "label": "C",
                "x": 184,
                "y": 346
              },
              {
                "id": "D",
                "label": "D",
                "x": 168,
                "y": 225
              },
              {
                "id": "E",
                "label": "E",
                "x": 245,
                "y": 128
              },
              {
                "id": "F",
                "label": "F",
                "x": 354,
                "y": 85
              },
              {
                "id": "G",
                "label": "G",
                "x": 475,
                "y": 69
              },
              {
                "id": "H",
                "label": "H",
                "x": 572,
                "y": 145
              },
              {
                "id": "I",
                "label": "I",
                "x": 614,
                "y": 254
              },
              {
                "id": "J",
                "label": "J",
                "x": 630,
                "y": 375
              },
              {
                "id": "K",
                "label": "K",
                "x": 554,
                "y": 471
              },
              {
                "id": "L",
                "label": "L",
                "x": 445,
                "y": 513
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 12
              },
              {
                "from": "A",
                "to": "C",
                "weight": 3
              },
              {
                "from": "A",
                "to": "D",
                "weight": 4
              },
              {
                "from": "A",
                "to": "G",
                "weight": 5
              },
              {
                "from": "B",
                "to": "C",
                "weight": 18
              },
              {
                "from": "B",
                "to": "D",
                "weight": 3
              },
              {
                "from": "B",
                "to": "E",
                "weight": 10
              },
              {
                "from": "B",
                "to": "F",
                "weight": 12
              },
              {
                "from": "C",
                "to": "E",
                "weight": 8
              },
              {
                "from": "C",
                "to": "F",
                "weight": 8
              },
              {
                "from": "D",
                "to": "H",
                "weight": 10
              },
              {
                "from": "D",
                "to": "K",
                "weight": 2
              },
              {
                "from": "D",
                "to": "L",
                "weight": 8
              },
              {
                "from": "E",
                "to": "F",
                "weight": 13
              },
              {
                "from": "E",
                "to": "G",
                "weight": 2
              },
              {
                "from": "E",
                "to": "I",
                "weight": 5
              },
              {
                "from": "E",
                "to": "J",
                "weight": 5
              },
              {
                "from": "F",
                "to": "I",
                "weight": 18
              },
              {
                "from": "G",
                "to": "K",
                "weight": 13
              },
              {
                "from": "H",
                "to": "J",
                "weight": 13
              },
              {
                "from": "H",
                "to": "K",
                "weight": 3
              }
            ]
          },
          "startVertex": "I",
          "endVertex": "L",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from I to L.",
          "solution": {
            "path": [
              "I",
              "E",
              "G",
              "A",
              "D",
              "L"
            ],
            "totalWeight": 24,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L5P5",
          "title": "Level 5 - Puzzle 5",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 273,
                "y": 481
              },
              {
                "id": "B",
                "label": "B",
                "x": 179,
                "y": 403
              },
              {
                "id": "C",
                "label": "C",
                "x": 169,
                "y": 280
              },
              {
                "id": "D",
                "label": "D",
                "x": 220,
                "y": 174
              },
              {
                "id": "E",
                "label": "E",
                "x": 297,
                "y": 80
              },
              {
                "id": "F",
                "label": "F",
                "x": 420,
                "y": 70
              },
              {
                "id": "G",
                "label": "G",
                "x": 526,
                "y": 121
              },
              {
                "id": "H",
                "label": "H",
                "x": 619,
                "y": 198
              },
              {
                "id": "I",
                "label": "I",
                "x": 629,
                "y": 320
              },
              {
                "id": "J",
                "label": "J",
                "x": 579,
                "y": 425
              },
              {
                "id": "K",
                "label": "K",
                "x": 502,
                "y": 518
              },
              {
                "id": "L",
                "label": "L",
                "x": 380,
                "y": 528
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 6
              },
              {
                "from": "A",
                "to": "D",
                "weight": 6
              },
              {
                "from": "A",
                "to": "G",
                "weight": 3
              },
              {
                "from": "A",
                "to": "H",
                "weight": 14
              },
              {
                "from": "B",
                "to": "C",
                "weight": 8
              },
              {
                "from": "B",
                "to": "G",
                "weight": 9
              },
              {
                "from": "B",
                "to": "L",
                "weight": 7
              },
              {
                "from": "C",
                "to": "D",
                "weight": 13
              },
              {
                "from": "C",
                "to": "E",
                "weight": 5
              },
              {
                "from": "C",
                "to": "H",
                "weight": 10
              },
              {
                "from": "C",
                "to": "J",
                "weight": 11
              },
              {
                "from": "C",
                "to": "L",
                "weight": 2
              },
              {
                "from": "D",
                "to": "E",
                "weight": 5
              },
              {
                "from": "D",
                "to": "F",
                "weight": 3
              },
              {
                "from": "E",
                "to": "G",
                "weight": 7
              },
              {
                "from": "E",
                "to": "L",
                "weight": 18
              },
              {
                "from": "G",
                "to": "H",
                "weight": 12
              },
              {
                "from": "G",
                "to": "I",
                "weight": 7
              },
              {
                "from": "H",
                "to": "K",
                "weight": 12
              },
              {
                "from": "H",
                "to": "L",
                "weight": 6
              },
              {
                "from": "I",
                "to": "K",
                "weight": 4
              },
              {
                "from": "J",
                "to": "L",
                "weight": 4
              }
            ]
          },
          "startVertex": "F",
          "endVertex": "J",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from F to J.",
          "solution": {
            "path": [
              "F",
              "D",
              "E",
              "C",
              "L",
              "J"
            ],
            "totalWeight": 19,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        },
        {
          "id": "L5P6",
          "title": "Level 5 - Puzzle 6",
          "difficulty": 5,
          "graph": {
            "directed": false,
            "weighted": true,
            "vertices": [
              {
                "id": "A",
                "label": "A",
                "x": 217,
                "y": 443
              },
              {
                "id": "B",
                "label": "B",
                "x": 182,
                "y": 331
              },
              {
                "id": "C",
                "label": "C",
                "x": 175,
                "y": 209
              },
              {
                "id": "D",
                "label": "D",
                "x": 258,
                "y": 118
              },
              {
                "id": "E",
                "label": "E",
                "x": 370,
                "y": 83
              },
              {
                "id": "F",
                "label": "F",
                "x": 491,
                "y": 76
              },
              {
                "id": "G",
                "label": "G",
                "x": 581,
                "y": 158
              },
              {
                "id": "H",
                "label": "H",
                "x": 616,
                "y": 270
              },
              {
                "id": "I",
                "label": "I",
                "x": 623,
                "y": 390
              },
              {
                "id": "J",
                "label": "J",
                "x": 541,
                "y": 480
              },
              {
                "id": "K",
                "label": "K",
                "x": 430,
                "y": 515
              },
              {
                "id": "L",
                "label": "L",
                "x": 310,
                "y": 523
              }
            ],
            "edges": [
              {
                "from": "A",
                "to": "B",
                "weight": 7
              },
              {
                "from": "A",
                "to": "C",
                "weight": 18
              },
              {
                "from": "A",
                "to": "D",
                "weight": 12
              },
              {
                "from": "A",
                "to": "I",
                "weight": 7
              },
              {
                "from": "B",
                "to": "C",
                "weight": 11
              },
              {
                "from": "B",
                "to": "H",
                "weight": 11
              },
              {
                "from": "C",
                "to": "D",
                "weight": 10
              },
              {
                "from": "C",
                "to": "E",
                "weight": 17
              },
              {
                "from": "C",
                "to": "G",
                "weight": 15
              },
              {
                "from": "C",
                "to": "H",
                "weight": 12
              },
              {
                "from": "C",
                "to": "J",
                "weight": 2
              },
              {
                "from": "D",
                "to": "E",
                "weight": 9
              },
              {
                "from": "D",
                "to": "G",
                "weight": 14
              },
              {
                "from": "E",
                "to": "F",
                "weight": 11
              },
              {
                "from": "E",
                "to": "G",
                "weight": 11
              },
              {
                "from": "E",
                "to": "J",
                "weight": 10
              },
              {
                "from": "F",
                "to": "G",
                "weight": 7
              },
              {
                "from": "F",
                "to": "J",
                "weight": 17
              },
              {
                "from": "G",
                "to": "K",
                "weight": 10
              },
              {
                "from": "G",
                "to": "L",
                "weight": 17
              },
              {
                "from": "H",
                "to": "I",
                "weight": 14
              },
              {
                "from": "K",
                "to": "L",
                "weight": 5
              }
            ]
          },
          "startVertex": "I",
          "endVertex": "L",
          "prompt": "Select the sequence of vertices forming the minimum-cost path from I to L.",
          "solution": {
            "path": [
              "I",
              "A",
              "D",
              "G",
              "K",
              "L"
            ],
            "totalWeight": 48,
            "edgeCount": 5,
            "uniqueShortestPath": true
          }
        }
      ]
    }
  ]
};
