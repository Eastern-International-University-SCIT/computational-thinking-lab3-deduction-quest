'use strict';

(function () {
  const DATA = window.DEDUCTIVE_DATA4;
  const PATH_DATA = window.DIJKSTRA_DATA;
  const STORAGE_KEY = 'info201.lab3.deductionQuest.v4';
  const LEGACY_STORAGE_KEY_V3 = 'info201.lab3.deductionQuest.v3';
  const LEGACY_STORAGE_KEY_V2 = 'info201.lab3.deductionQuest.v2';
  const LEGACY_STORAGE_KEY_V1 = 'info201.lab3.deductionQuest.v1';
  const REQUIRED_GAMES = ['pathfinding', 'queens', 'knapsack', 'deduction'];
  const UI = {
    en: {
      save: 'Save work', load: 'Load progress', reset: 'Reset', overall: 'Required progress', solved: '{a}/{b} solved',
      homeEyebrow: 'Computational thinking · Practice lab',
      homeTitle: 'Four puzzles. One computational mindset.',
      homeText: 'Place, select, test, and explain. Your work saves automatically on this device; download a copy when you finish.',
      counted: 'Required activities', optionalNote: 'Optional levels are marked with a star and do not change the required percentage.',
      open: 'Open game', pathfinding: 'Path Finding', pathfindingDesc: 'Build the minimum-cost route by selecting adjacent vertices in sequence.',
      queens: 'N-Queens', queensDesc: 'Place queens so no two share a row, column, or diagonal.',
      knapsack: '0/1 Knapsack', knapsackDesc: 'Choose each item at most once to maximize value without exceeding the weight limit.',
      deduction: 'Argument Validity', deductionDesc: 'Select every conclusion that follows necessarily from the premises.',
      back: 'All games', tutorial: 'How to play', required: 'Required', optional: 'Optional ★', level: 'Level',
      check: 'Check answer', clear: 'Clear', hint: 'Hint', next: 'Next', previous: 'Previous',
      pathPrompt: 'Find the minimum-cost path from {start} to {end}.', pathStart: 'Start', pathEnd: 'Destination', pathCost: 'Current cost',
      pathEmpty: 'Select {start} to begin.', pathSelected: 'Selected route', pathStartFirst: 'Begin the route at vertex {start}.',
      pathAdjacent: 'Choose a vertex connected to {vertex}.', pathRepeat: 'A route cannot visit the same vertex twice.',
      pathIncomplete: 'Your route must end at {end}.', pathGood: 'Correct! This is the minimum-cost path.',
      pathBad: 'This route costs {cost}, but a lower-cost route is possible. Try again.', pathUndo: 'Select an earlier route vertex to backtrack.',
      queensIntro: 'Place exactly {n} queens. Red squares show queens that attack one another.', queensPlaced: 'Queens placed', conflicts: 'Conflicts',
      queenMoves: 'Reachable cells', queenMovesHelp: 'Highlighted empty cells can be reached by at least one placed queen.',
      queensGood: 'Elegant! No queen can attack another.', queensBadCount: 'Place exactly {n} queens before checking.', queensBadConflict: 'Some queens still attack one another. Move the red queens.',
      noHint: 'These placements cannot extend to a solution. Move a conflicting queen first.',
      capacity: 'Weight capacity', weight: 'Weight', value: 'Value',
      shelf: 'Available items', basket: 'Your basket', basketEmpty: 'Drag or tap items to add them.',
      basketGood: 'Optimal subset! You achieved the greatest possible value within the weight limit.',
      basketOver: 'The basket is {amount} kg over the weight limit.', basketSuboptimal: 'This subset is within the weight limit, but a more valuable subset is possible.',
      topic: 'Topic', puzzle: 'Puzzle', rule: 'Inference focus', premises: 'Premises', conclusions: 'Possible conclusions',
      selectInstruction: 'Select exactly {n} conclusion(s) that must be true.', selected: '{a}/{b} selected',
      deductionGood: 'Correct. You identified every valid conclusion.', deductionBad: 'Not all selected conclusions are correct. Revise your selection and try again.',
      chooseExact: 'Choose exactly {n} conclusion(s) before checking.', maxChosen: 'This puzzle needs only {n} selection(s).',
      identityTitle: 'Save your progress', identityText: 'Enter your details to download a portable JSON record of all four games.',
      studentId: 'Student ID', studentName: 'Full name', download: 'Download work', identityError: 'Please enter both fields.', savedFile: 'Saved {name}',
      loadConfirm: 'Replace current progress with the progress in {name}?', loadedFile: 'Loaded {name}.',
      loadedLegacyRules: 'Loaded {name}. Knapsack and Argument Validity progress restarted because their rules and puzzles have changed.',
      loadedLegacyData: 'Loaded {name}. Argument Validity progress restarted because its puzzles have changed.', loadInvalid: 'This is not a valid Deduction Quest save file.',
      resetConfirm: 'Clear all Lab 3 progress and student details on this device?',
      tutorialStep: 'Guide {a} of {b}', skip: 'Skip guide', finish: 'Start playing',
      tutorialNext: 'Next tip', optionalProgress: 'Optional: {a}/{b}',
      languageWarningTitle: 'Language note (Levels 3–5)',
      languageWarning: 'From Level 3 onward, some generated premise sentences contain grammatical or wording errors. The symbolic forms are authoritative, and the valid conclusions still form logically valid deductive arguments.',
      languageIssueBadge: 'Wording issue detected',
      languageIssueText: 'Detected pattern: the same propositions appear with OR in the condition and AND in the result.',
      suggestedReading: 'Simpler intended reading',
      formalLanguageNote: 'The symbolic form remains the formal premise; this reading is a language aid, not a logically equivalent replacement.',
    },
    vi: {
      pathfinding: 'Tìm đường đi', pathfindingDesc: 'Tạo đường đi có tổng chi phí nhỏ nhất bằng cách chọn các đỉnh kề nhau theo thứ tự.',
      pathPrompt: 'Tìm đường đi có chi phí nhỏ nhất từ {start} đến {end}.', pathStart: 'Bắt đầu', pathEnd: 'Đích', pathCost: 'Chi phí hiện tại',
      pathEmpty: 'Chọn {start} để bắt đầu.', pathSelected: 'Đường đi đã chọn', pathStartFirst: 'Hãy bắt đầu tại đỉnh {start}.',
      pathAdjacent: 'Hãy chọn một đỉnh nối trực tiếp với {vertex}.', pathRepeat: 'Một đường đi không thể ghé cùng một đỉnh hai lần.',
      pathIncomplete: 'Đường đi phải kết thúc tại {end}.', pathGood: 'Chính xác! Đây là đường đi có chi phí nhỏ nhất.',
      pathBad: 'Đường đi này có chi phí {cost}, nhưng vẫn có đường đi ngắn hơn. Hãy thử lại.', pathUndo: 'Chọn một đỉnh trước đó để quay lui.',
      save: 'Lưu bài', load: 'Tải tiến độ', reset: 'Đặt lại', overall: 'Tiến độ bắt buộc', solved: 'Đã giải {a}/{b}',
      homeEyebrow: 'Tư duy tính toán · Bài thực hành',
      homeTitle: 'Bốn trò chơi. Một tư duy tính toán.',
      homeText: 'Đặt, chọn, kiểm tra và giải thích. Bài làm tự động lưu trên thiết bị này; hãy tải bản sao khi hoàn tất.',
      counted: 'Hoạt động bắt buộc', optionalNote: 'Các mức tự chọn có dấu sao và không làm thay đổi phần trăm bắt buộc.',
      open: 'Mở trò chơi', queens: 'Bài toán N quân hậu', queensDesc: 'Đặt các quân hậu sao cho không có hai quân cùng hàng, cột hoặc đường chéo.',
      knapsack: 'Bài toán ba lô 0/1', knapsackDesc: 'Mỗi món chỉ được chọn tối đa một lần để tối đa hóa giá trị mà không vượt quá giới hạn trọng lượng.',
      deduction: 'Tính hợp lệ của lập luận', deductionDesc: 'Chọn mọi kết luận tất yếu suy ra từ các tiền đề.',
      back: 'Tất cả trò chơi', tutorial: 'Cách chơi', required: 'Bắt buộc', optional: 'Tự chọn ★', level: 'Mức',
      check: 'Kiểm tra', clear: 'Xóa', hint: 'Gợi ý', next: 'Tiếp', previous: 'Trước',
      queensIntro: 'Đặt đúng {n} quân hậu. Ô màu đỏ cho biết các quân đang tấn công nhau.', queensPlaced: 'Số quân đã đặt', conflicts: 'Xung đột',
      queenMoves: 'Các ô quân hậu đi được', queenMovesHelp: 'Các ô trống được tô sáng là những ô mà ít nhất một quân hậu có thể đi tới.',
      queensGood: 'Tuyệt vời! Không quân hậu nào có thể tấn công quân khác.', queensBadCount: 'Hãy đặt đúng {n} quân hậu trước khi kiểm tra.', queensBadConflict: 'Một số quân vẫn tấn công nhau. Hãy di chuyển các quân màu đỏ.',
      noHint: 'Các vị trí hiện tại không thể mở rộng thành lời giải. Hãy di chuyển một quân xung đột.',
      capacity: 'Giới hạn trọng lượng', weight: 'Trọng lượng', value: 'Giá trị',
      shelf: 'Các món hiện có', basket: 'Giỏ của bạn', basketEmpty: 'Kéo hoặc chạm vào món đồ để thêm.',
      basketGood: 'Tối ưu! Bạn đã đạt giá trị lớn nhất có thể trong giới hạn trọng lượng.',
      basketOver: 'Giỏ vượt quá giới hạn trọng lượng {amount} kg.', basketSuboptimal: 'Tập hợp này không vượt giới hạn trọng lượng, nhưng vẫn có một tập hợp giá trị cao hơn.',
      topic: 'Chủ đề', puzzle: 'Câu đố', rule: 'Trọng tâm suy luận', premises: 'Các tiền đề', conclusions: 'Các kết luận có thể',
      selectInstruction: 'Chọn đúng {n} kết luận chắc chắn đúng.', selected: 'Đã chọn {a}/{b}',
      deductionGood: 'Chính xác. Bạn đã tìm đủ mọi kết luận hợp lệ.', deductionBad: 'Các kết luận đã chọn chưa hoàn toàn chính xác. Hãy điều chỉnh và thử lại.',
      chooseExact: 'Hãy chọn đúng {n} kết luận trước khi kiểm tra.', maxChosen: 'Câu này chỉ cần {n} lựa chọn.',
      identityTitle: 'Lưu tiến độ', identityText: 'Nhập thông tin để tải tệp JSON chứa bài làm của cả bốn trò chơi.',
      studentId: 'Mã số sinh viên', studentName: 'Họ và tên', download: 'Tải bài làm', identityError: 'Vui lòng nhập cả hai thông tin.', savedFile: 'Đã lưu {name}',
      loadConfirm: 'Thay thế tiến độ hiện tại bằng tiến độ trong {name}?', loadedFile: 'Đã tải {name}.',
      loadedLegacyRules: 'Đã tải {name}. Tiến độ Ba lô và Tính hợp lệ của lập luận được bắt đầu lại vì luật chơi và câu đố đã thay đổi.',
      loadedLegacyData: 'Đã tải {name}. Tiến độ Tính hợp lệ của lập luận được bắt đầu lại vì dữ liệu câu đố đã thay đổi.', loadInvalid: 'Đây không phải là tệp lưu Deduction Quest hợp lệ.',
      resetConfirm: 'Xóa toàn bộ tiến độ Lab 3 và thông tin sinh viên trên thiết bị này?',
      tutorialStep: 'Hướng dẫn {a}/{b}', skip: 'Bỏ qua', finish: 'Bắt đầu chơi',
      tutorialNext: 'Mẹo tiếp theo', optionalProgress: 'Tự chọn: {a}/{b}',
      languageWarningTitle: 'Lưu ý ngôn ngữ (Mức 3–5)',
      languageWarning: 'Từ Mức 3, một số câu tiền đề được tạo tự động có lỗi ngữ pháp hoặc cách diễn đạt. Dạng ký hiệu là căn cứ chính thức; các kết luận hợp lệ vẫn tạo thành những lập luận suy diễn hợp lệ về logic.',
      languageIssueBadge: 'Đã phát hiện vấn đề diễn đạt',
      languageIssueText: 'Mẫu được phát hiện: cùng các mệnh đề xuất hiện với HOẶC trong điều kiện và VÀ trong kết quả.',
      suggestedReading: 'Cách đọc dự kiến đơn giản hơn',
      formalLanguageNote: 'Dạng ký hiệu vẫn là tiền đề chính thức; cách đọc này chỉ hỗ trợ ngôn ngữ, không phải là một biểu thức tương đương logic.',
    },
  };

  const QUEEN_LEVELS = [
    {id: 1, n: 4, optional: false}, {id: 2, n: 5, optional: false}, {id: 3, n: 6, optional: false},
    {id: 4, n: 7, optional: true}, {id: 5, n: 8, optional: true}, {id: 6, n: 9, optional: true}, {id: 7, n: 10, optional: true},
  ];

  const SACK_ITEM_CATALOG = {
    book: ['📘','Book','Sách'], lamp: ['💡','Lamp','Đèn'], cup: ['☕','Cup','Cốc'], clock: ['⏰','Clock','Đồng hồ'],
    pen: ['🖊️','Pen','Bút'], headset: ['🎧','Headset','Tai nghe'], plant: ['🪴','Plant','Cây'], mouse: ['🖱️','Mouse','Chuột'], note: ['📒','Notebook','Sổ'],
    shoe: ['👟','Shoes','Giày'], camera: ['📷','Camera','Máy ảnh'], bag: ['🎒','Bag','Ba lô'], watch: ['⌚','Watch','Đồng hồ'], ball: ['⚽','Ball','Bóng'], key: ['🔑','Key','Chìa khóa'],
    tablet: ['💻','Tablet','Máy tính bảng'], speaker: ['🔊','Speaker','Loa'], game: ['🎮','Gamepad','Tay cầm'], bottle: ['🧴','Bottle','Chai'], cap: ['🧢','Cap','Mũ'], snack: ['🥨','Snack','Đồ ăn'],
    bike: ['🚲','Bike','Xe đạp'], tent: ['⛺','Tent','Lều'], boot: ['🥾','Boots','Ủng'], map: ['🗺️','Map','Bản đồ'], torch: ['🔦','Torch','Đèn pin'], coat: ['🧥','Coat','Áo khoác'], rope: ['🪢','Rope','Dây'],
    drone: ['🚁','Drone','Drone'], phone: ['📱','Phone','Điện thoại'], lens: ['🔭','Lens','Ống kính'], mic: ['🎙️','Microphone','Micrô'], drive: ['💾','Drive','Ổ đĩa'], cable: ['🔌','Cable','Cáp'], battery: ['🔋','Battery','Pin'],
    monitor: ['🖥️','Monitor','Màn hình'], printer: ['🖨️','Printer','Máy in'], router: ['📡','Router','Bộ định tuyến'], keyboard: ['⌨️','Keyboard','Bàn phím'], disk: ['💿','Disk','Đĩa'], adapter: ['🔌','Adapter','Bộ chuyển'], case: ['💼','Case','Túi'], webcam: ['📹','Webcam','Webcam'],
    robot: ['🤖','Robot','Robot'], server: ['🗄️','Server','Máy chủ'], scope: ['🔬','Microscope','Kính hiển vi'], tool: ['🧰','Toolkit','Bộ dụng cụ'], radio: ['📻','Radio','Radio'], chip: ['🧩','Chipset','Bộ chip'], sensor: ['🎛️','Sensor','Cảm biến'], meter: ['📟','Meter','Máy đo'], scanner: ['📠','Scanner','Máy quét'],
  };
  function sackPuzzle(id, capacity, specs) {
    return {id, capacity, items: specs.map(([key, weight, value]) => {
      const [emoji, en, vi] = SACK_ITEM_CATALOG[key];
      return {id: `${id}-${key}`, emoji, weight, value, en, vi};
    })};
  }
  const KNAPSACK_LEVELS = [
    {id: 1, optional: false, puzzles: [
      sackPuzzle('K1-1', 7, [['book',2,6],['lamp',3,7],['cup',4,8],['clock',5,9]]),
      sackPuzzle('K1-2', 8, [['book',3,5],['lamp',4,9],['cup',2,4],['clock',5,10]]),
      sackPuzzle('K1-3', 9, [['book',4,8],['lamp',2,5],['cup',5,9],['clock',3,7]]),
    ]},
    {id: 2, optional: false, puzzles: [
      sackPuzzle('K2-1', 10, [['pen',2,4],['headset',5,11],['plant',4,7],['mouse',3,6],['note',6,12]]),
      sackPuzzle('K2-2', 11, [['pen',3,6],['headset',6,13],['plant',5,10],['mouse',4,8],['note',2,3]]),
      sackPuzzle('K2-3', 12, [['pen',4,7],['headset',7,15],['plant',3,5],['mouse',5,11],['note',2,4]]),
    ]},
    {id: 3, optional: false, puzzles: [
      sackPuzzle('K3-1', 14, [['shoe',6,12],['camera',8,18],['bag',5,10],['watch',4,9],['ball',3,5],['key',2,4]]),
      sackPuzzle('K3-2', 15, [['shoe',7,15],['camera',9,20],['bag',6,13],['watch',5,11],['ball',4,8],['key',2,3]]),
      sackPuzzle('K3-3', 16, [['shoe',8,17],['camera',10,22],['bag',7,14],['watch',4,10],['ball',5,9],['key',3,6]]),
    ]},
    {id: 4, optional: true, puzzles: [
      sackPuzzle('K4-1', 18, [['tablet',10,24],['speaker',7,16],['game',8,18],['bottle',4,7],['cap',3,5],['snack',2,4]]),
      sackPuzzle('K4-2', 20, [['tablet',11,25],['speaker',8,19],['game',9,20],['bottle',5,9],['cap',4,7],['snack',3,6]]),
      sackPuzzle('K4-3', 21, [['tablet',12,28],['speaker',9,21],['game',10,23],['bottle',4,8],['cap',5,10],['snack',2,5]]),
    ]},
    {id: 5, optional: true, puzzles: [
      sackPuzzle('K5-1', 23, [['bike',13,30],['tent',11,25],['boot',8,17],['map',3,6],['torch',5,11],['coat',9,19],['rope',4,8]]),
      sackPuzzle('K5-2', 25, [['bike',14,32],['tent',12,28],['boot',9,19],['map',4,7],['torch',6,13],['coat',10,22],['rope',5,10]]),
      sackPuzzle('K5-3', 27, [['bike',15,35],['tent',13,30],['boot',10,21],['map',4,9],['torch',7,15],['coat',11,24],['rope',5,11]]),
    ]},
    {id: 6, optional: true, puzzles: [
      sackPuzzle('K6-1', 28, [['drone',15,36],['phone',12,29],['lens',10,23],['mic',7,16],['drive',5,11],['cable',3,6],['battery',4,9]]),
      sackPuzzle('K6-2', 30, [['drone',16,39],['phone',13,31],['lens',11,26],['mic',8,18],['drive',6,13],['cable',4,7],['battery',5,10]]),
      sackPuzzle('K6-3', 32, [['drone',18,42],['phone',14,34],['lens',12,28],['mic',9,21],['drive',7,15],['cable',3,7],['battery',5,12]]),
    ]},
    {id: 7, optional: true, puzzles: [
      sackPuzzle('K7-1', 34, [['monitor',18,43],['printer',16,37],['router',11,25],['keyboard',9,20],['disk',6,13],['adapter',4,8],['case',10,22],['webcam',7,16]]),
      sackPuzzle('K7-2', 36, [['monitor',19,46],['printer',17,40],['router',12,28],['keyboard',10,23],['disk',7,15],['adapter',5,9],['case',11,25],['webcam',8,18]]),
      sackPuzzle('K7-3', 38, [['monitor',20,49],['printer',18,42],['router',13,31],['keyboard',11,25],['disk',8,17],['adapter',4,10],['case',12,27],['webcam',9,20]]),
    ]},
    {id: 8, optional: true, puzzles: [
      sackPuzzle('K8-1', 42, [['robot',22,55],['server',20,48],['scope',16,38],['tool',13,30],['radio',10,22],['chip',8,18],['sensor',7,16],['meter',6,13],['scanner',12,27]]),
      sackPuzzle('K8-2', 45, [['robot',24,59],['server',21,51],['scope',17,41],['tool',14,33],['radio',11,25],['chip',9,20],['sensor',8,18],['meter',7,15],['scanner',13,30]]),
      sackPuzzle('K8-3', 48, [['robot',25,63],['server',23,56],['scope',19,45],['tool',15,36],['radio',12,28],['chip',10,23],['sensor',9,21],['meter',7,17],['scanner',14,33]]),
    ]},
  ];

  // Build a fresh option order once per page load. Re-renders reuse these
  // arrays, so choices do not jump around while a learner is answering.
  function shuffled(values) {
    const result = values.slice();
    for (let index = result.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }
  function pageOrder(key, values) {
    let result = shuffled(values);
    try {
      const storageKey = `info201.lab3.pageOrder.${key}`;
      const previous = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
      if (result.length > 1 && result.every((value, index) => value === previous[index])) {
        result = result.slice(1).concat(result[0]);
      }
      sessionStorage.setItem(storageKey, JSON.stringify(result));
    } catch (_) {
      // Random order still works where file:// session storage is unavailable.
    }
    return result;
  }
  const PAGE_ORDERS = {knapsack: {}, deduction: {}};
  KNAPSACK_LEVELS.forEach(level => {
    level.puzzles.forEach(puzzle => {
      PAGE_ORDERS.knapsack[puzzle.id] = pageOrder(`knapsack.${puzzle.id}`, puzzle.items.map(item => item.id));
    });
  });
  if (DATA) {
    DATA.levels.forEach(level => level.topics.forEach(topic => topic.puzzles.forEach(puzzle => {
      PAGE_ORDERS.deduction[puzzle.id] = pageOrder(`deduction.${puzzle.id}`, puzzle.conclusions.map(conclusion => conclusion.id));
    })));
  }
  function orderedItems(puzzle) {
    return PAGE_ORDERS.knapsack[puzzle.id].map(id => puzzle.items.find(item => item.id === id));
  }
  function orderedConclusions(puzzle) {
    return PAGE_ORDERS.deduction[puzzle.id].map(id => puzzle.conclusions.find(conclusion => conclusion.id === id));
  }

  const TUTORIALS = {
    pathfinding: [
      {selector: '.path-graph', en: ['Read the weighted graph', 'Circles are vertices and every line shows an available edge. The number on an edge is its cost.'], vi: ['Đọc đồ thị có trọng số', 'Mỗi vòng tròn là một đỉnh, mỗi đường nối là một cạnh và con số trên cạnh là chi phí.']},
      {selector: '.path-route', en: ['Build an ordered route', 'Select the start vertex, then select adjacent vertices one at a time. Select an earlier route vertex to backtrack.'], vi: ['Tạo đường đi theo thứ tự', 'Chọn đỉnh bắt đầu, rồi lần lượt chọn các đỉnh kề. Chọn một đỉnh trước đó để quay lui.']},
      {selector: '[data-action="check-path"]', en: ['Minimize total cost', 'Reach the destination, then check whether the sum of your edge weights is the smallest possible. Levels 4–5 are optional.'], vi: ['Tối thiểu hóa tổng chi phí', 'Đi đến đích rồi kiểm tra xem tổng trọng số có nhỏ nhất hay không. Mức 4–5 là tự chọn.']},
    ],
    queens: [
      {selector: '.chessboard', en: ['Build the board', 'Tap a square to place or remove a queen. Begin with one queen in each row.'], vi: ['Dựng bàn cờ', 'Chạm vào một ô để đặt hoặc bỏ quân hậu. Hãy bắt đầu với một quân trên mỗi hàng.']},
      {selector: '.queen-move-legend', en: ['Watch the reachable cells', 'Highlighted empty cells are reachable by a placed queen. Red queens attack one another.'], vi: ['Theo dõi các ô đi được', 'Các ô trống được tô sáng là những ô quân hậu đã đặt có thể đi tới. Quân màu đỏ đang tấn công nhau.']},
      {selector: '[data-action="check-queens"]', en: ['Test the placement', 'When exactly N queens are on the board, check your arrangement. Optional larger boards do not affect required progress.'], vi: ['Kiểm tra cách đặt', 'Khi có đúng N quân hậu, hãy kiểm tra. Các bàn cờ tự chọn lớn hơn không ảnh hưởng tiến độ bắt buộc.']},
    ],
    knapsack: [
      {selector: '.item-shelf', en: ['Choose a subset', 'Each item may be used once or not at all—that is the “0/1” rule. Drag an item, or simply tap it.'], vi: ['Chọn một tập con', 'Mỗi món được dùng một lần hoặc không dùng—đó là quy tắc “0/1”. Hãy kéo hoặc chạm vào món đồ.']},
      {selector: '.basket', en: ['Balance weight and value', 'The basket totals both measures. Stay at or below capacity while seeking the greatest possible value.'], vi: ['Cân bằng trọng lượng và giá trị', 'Giỏ tự cộng cả hai đại lượng. Không vượt sức chứa và tìm giá trị lớn nhất có thể.']},
      {selector: '[data-action="check-knapsack"]', en: ['Check the subset', 'A solution is correct only when it reaches the maximum value without exceeding capacity. Levels 4–8 are optional.'], vi: ['Kiểm tra tập con', 'Lời giải chỉ đúng khi đạt giá trị tối đa mà không vượt sức chứa. Mức 4–8 là tự chọn.']},
    ],
    deduction: [
      {selector: '.premise-list', en: ['Read from the premises', 'Treat every premise as given. Validity asks what must follow—not whether the story is factually true.'], vi: ['Đọc từ các tiền đề', 'Xem mọi tiền đề là đã cho. Tính hợp lệ hỏi điều gì tất yếu suy ra—không hỏi câu chuyện có đúng thực tế hay không.']},
      {selector: '.conclusion-grid', en: ['Select all valid conclusions', 'The required number changes by level: 1, 2, 4, 6, then 8. Symbolic forms are shown beside natural language.'], vi: ['Chọn mọi kết luận hợp lệ', 'Số lựa chọn thay đổi theo mức: 1, 2, 4, 6 rồi 8. Dạng ký hiệu nằm cạnh câu tự nhiên.']},
      {selector: '[data-action="check-deduction"]', en: ['Check validity', 'Levels 1–2 count toward required progress. Levels 3–5 are optional challenges.'], vi: ['Kiểm tra tính hợp lệ', 'Mức 1–2 tính vào tiến độ bắt buộc. Mức 3–5 là thử thách tự chọn.']},
    ],
  };

  const defaults = {
    version: 4, dataFingerprint: DATA.fingerprint, pathDataVersion: PATH_DATA?.version, lang: 'en', active: null,
    identity: {id: '', name: ''}, tutorials: {},
    pathfinding: {level: 1, puzzle: {}, selected: {}, solved: {}, feedback: {}},
    queens: {level: 1, boards: {}, solved: {}, feedback: {}},
    knapsack: {level: 1, puzzle: {}, selected: {}, solved: {}, feedback: {}},
    deduction: {level: 1, topic: 'school', puzzle: {}, selected: {}, solved: {}, feedback: {}},
  };
  let state = loadState();
  let animateShell = Boolean(state.active);
  let tutorial = null;
  let toastTimer = null;
  const app = document.getElementById('app');

  function cloneValue(value) {
    if (Array.isArray(value)) return value.map(cloneValue);
    if (!value || typeof value !== 'object') return value;
    const copy = {};
    Object.keys(value).forEach(key => { if (key !== '__proto__' && key !== 'constructor' && key !== 'prototype') copy[key] = cloneValue(value[key]); });
    return copy;
  }
  function deepMerge(base, saved) {
    const out = cloneValue(base);
    if (!saved || typeof saved !== 'object') return out;
    Object.keys(saved).forEach(key => {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') return;
      if (base[key] && !Array.isArray(base[key]) && typeof base[key] === 'object' && typeof saved[key] === 'object') out[key] = deepMerge(base[key], saved[key]);
      else out[key] = cloneValue(saved[key]);
    });
    return out;
  }
  function loadState() {
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      if (current) {
        const saved = JSON.parse(current), loaded = deepMerge(defaults, saved);
        if (saved.dataFingerprint !== DATA.fingerprint) {
          loaded.dataFingerprint = DATA.fingerprint;
          loaded.deduction = deepMerge(defaults.deduction, {});
        }
        return loaded;
      }
      const legacyV3 = localStorage.getItem(LEGACY_STORAGE_KEY_V3);
      if (legacyV3) {
        const migrated = deepMerge(defaults, JSON.parse(legacyV3));
        migrated.version = 4;
        migrated.pathfinding = deepMerge(defaults.pathfinding, {});
        return migrated;
      }
      const legacyV2 = localStorage.getItem(LEGACY_STORAGE_KEY_V2);
      if (legacyV2) {
        const migrated = deepMerge(defaults, JSON.parse(legacyV2));
        migrated.version = 4;
        migrated.deduction = deepMerge(defaults.deduction, {});
        return migrated;
      }
      const legacyV1 = localStorage.getItem(LEGACY_STORAGE_KEY_V1);
      if (!legacyV1) return deepMerge(defaults, {});
      const legacy = JSON.parse(legacyV1), migrated = deepMerge(defaults, legacy);
      const oldQueenLevel = Number(legacy.queens?.level);
      migrated.version = 4;
      migrated.queens.level = oldQueenLevel >= 4 && oldQueenLevel <= 10 ? oldQueenLevel - 3 : defaults.queens.level;
      migrated.knapsack = deepMerge(defaults.knapsack, {});
      migrated.deduction = deepMerge(defaults.deduction, {});
      return migrated;
    }
    catch (_) { return deepMerge(defaults, {}); }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) { /* download still works */ }
  }
  function objectValue(value) { return value && typeof value === 'object' && !Array.isArray(value) ? value : {}; }
  function safeString(value, limit=200) { return (typeof value === 'string' || typeof value === 'number') ? String(value).slice(0, limit) : ''; }
  function saveCompatibility(payload) {
    return {
      resetKnapsack: payload.schema === 'info201.lab3.save.v1',
      resetDeduction: !['info201.lab3.save.v3', 'info201.lab3.save.v4'].includes(payload.schema) || payload.dataSchema !== DATA.schema || payload.dataFingerprint !== DATA.fingerprint,
      resetPathfinding: payload.schema !== 'info201.lab3.save.v4' || payload.pathDataVersion !== PATH_DATA.version,
    };
  }
  function stateFromSave(payload) {
    const supportedSchemas = new Set(['info201.lab3.save.v1', 'info201.lab3.save.v2', 'info201.lab3.save.v3', 'info201.lab3.save.v4']);
    if (!payload || typeof payload !== 'object' || payload.app !== 'Deduction Quest' || !supportedSchemas.has(payload.schema) || !payload.state || typeof payload.state !== 'object') throw new Error('Invalid save file');

    const compatibility = saveCompatibility(payload), raw = payload.state;
    const imported = deepMerge(defaults, {lang: state.lang, tutorials: state.tutorials});
    const student = objectValue(payload.student), rawIdentity = objectValue(raw.identity);
    imported.version = 4;
    imported.active = null;
    imported.identity = {id: safeString(student.id ?? rawIdentity.id), name: safeString(student.name ?? rawIdentity.name)};

    if (!compatibility.resetPathfinding) {
      const rawPath = objectValue(raw.pathfinding), pathPuzzles = new Map();
      PATH_DATA.levels.forEach(level => level.puzzles.forEach(puzzle => pathPuzzles.set(puzzle.id, puzzle)));
      const pathLevel = Number(rawPath.level);
      imported.pathfinding.level = PATH_DATA.levels.some(level => level.level === pathLevel) ? pathLevel : defaults.pathfinding.level;
      Object.entries(objectValue(rawPath.puzzle)).forEach(([levelId, puzzleId]) => {
        const level = PATH_DATA.levels.find(item => item.level === Number(levelId));
        if (level?.puzzles.some(puzzle => puzzle.id === puzzleId)) imported.pathfinding.puzzle[levelId] = puzzleId;
      });
      Object.entries(objectValue(rawPath.selected)).forEach(([puzzleId, selected]) => {
        const puzzle = pathPuzzles.get(puzzleId);
        if (!puzzle || !Array.isArray(selected)) return;
        const vertexIds = new Set(puzzle.graph.vertices.map(vertex => vertex.id));
        const route = selected.filter(id => vertexIds.has(id));
        if (route.length === new Set(route).size) imported.pathfinding.selected[puzzleId] = route;
      });
      Object.entries(objectValue(rawPath.solved)).forEach(([puzzleId, solved]) => { if (pathPuzzles.has(puzzleId) && solved === true) imported.pathfinding.solved[puzzleId] = true; });
    }

    const rawQueens = objectValue(raw.queens), queenLevels = new Set(QUEEN_LEVELS.map(level => level.id)), queenSizes = new Set(QUEEN_LEVELS.map(level => level.n));
    const rawQueenLevel = Number(rawQueens.level), queenLevel = compatibility.resetKnapsack && rawQueenLevel >= 4 && rawQueenLevel <= 10 ? rawQueenLevel - 3 : rawQueenLevel;
    imported.queens.level = queenLevels.has(queenLevel) ? queenLevel : defaults.queens.level;
    Object.entries(objectValue(rawQueens.boards)).forEach(([size, placements]) => {
      const n = Number(size);
      if (!queenSizes.has(n) || !Array.isArray(placements)) return;
      imported.queens.boards[n] = [...new Set(placements.filter(position => {
        if (typeof position !== 'string') return false;
        const parts = position.split(',').map(Number);
        return parts.length === 2 && parts.every(Number.isInteger) && parts.every(value => value >= 0 && value < n);
      }))];
    });
    Object.entries(objectValue(rawQueens.solved)).forEach(([size, solved]) => { if (queenSizes.has(Number(size)) && solved === true) imported.queens.solved[size] = true; });

    if (!compatibility.resetKnapsack) {
      const rawKnapsack = objectValue(raw.knapsack), sackPuzzles = new Map();
      KNAPSACK_LEVELS.forEach(level => level.puzzles.forEach(puzzle => sackPuzzles.set(puzzle.id, puzzle)));
      const sackLevel = Number(rawKnapsack.level);
      imported.knapsack.level = KNAPSACK_LEVELS.some(level => level.id === sackLevel) ? sackLevel : defaults.knapsack.level;
      Object.entries(objectValue(rawKnapsack.puzzle)).forEach(([levelId, puzzleId]) => {
        const level = KNAPSACK_LEVELS.find(item => item.id === Number(levelId));
        if (level?.puzzles.some(puzzle => puzzle.id === puzzleId)) imported.knapsack.puzzle[levelId] = puzzleId;
      });
      Object.entries(objectValue(rawKnapsack.selected)).forEach(([puzzleId, selected]) => {
        const puzzle = sackPuzzles.get(puzzleId);
        if (!puzzle || !Array.isArray(selected)) return;
        const itemIds = new Set(puzzle.items.map(item => item.id));
        imported.knapsack.selected[puzzleId] = [...new Set(selected.filter(id => itemIds.has(id)))];
      });
      Object.entries(objectValue(rawKnapsack.solved)).forEach(([puzzleId, solved]) => { if (sackPuzzles.has(puzzleId) && solved === true) imported.knapsack.solved[puzzleId] = true; });
    }

    if (!compatibility.resetDeduction) {
      const rawDeduction = objectValue(raw.deduction), deductionPuzzles = new Map();
      DATA.levels.forEach(level => level.topics.forEach(topic => topic.puzzles.forEach(puzzle => deductionPuzzles.set(puzzle.id, puzzle))));
      const deductionLevel = Number(rawDeduction.level), selectedLevel = DATA.levels.find(level => level.id === deductionLevel) || DATA.levels[0];
      imported.deduction.level = selectedLevel.id;
      imported.deduction.topic = selectedLevel.topics.some(topic => topic.id === rawDeduction.topic) ? rawDeduction.topic : selectedLevel.topics[0].id;
      Object.entries(objectValue(rawDeduction.puzzle)).forEach(([key, puzzleId]) => { if (deductionPuzzles.has(puzzleId)) imported.deduction.puzzle[key] = puzzleId; });
      Object.entries(objectValue(rawDeduction.selected)).forEach(([puzzleId, selected]) => {
        const puzzle = deductionPuzzles.get(puzzleId);
        if (!puzzle || !Array.isArray(selected)) return;
        const conclusionIds = new Set(puzzle.conclusions.map(conclusion => conclusion.id));
        imported.deduction.selected[puzzleId] = [...new Set(selected.filter(id => conclusionIds.has(id)))].slice(0, puzzle.requiredSelections);
      });
      Object.entries(objectValue(rawDeduction.solved)).forEach(([puzzleId, solved]) => { if (deductionPuzzles.has(puzzleId) && solved === true) imported.deduction.solved[puzzleId] = true; });
    }
    return imported;
  }
  function text(value) { return value && typeof value === 'object' ? (value[state.lang] || value.en || '') : (value || ''); }
  function tr(key, params) {
    let value = UI[state.lang][key] || UI.en[key] || key;
    Object.entries(params || {}).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, replacement); });
    return value;
  }
  function esc(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function optionalLabel(optional) { return optional ? tr('optional') : tr('required'); }
  function setAndRender() { saveState(); render(); }

  function progress() {
    const pathPuzzles = PATH_DATA.levels.flatMap(level => level.puzzles.map(puzzle => ({...puzzle, optional: level.level >= 4})));
    const pathRequired = pathPuzzles.filter(puzzle => !puzzle.optional);
    const pathOptional = pathPuzzles.filter(puzzle => puzzle.optional);
    const queenRequired = QUEEN_LEVELS.filter(x => !x.optional);
    const queenOptional = QUEEN_LEVELS.filter(x => x.optional);
    const sackPuzzles = KNAPSACK_LEVELS.flatMap(level => level.puzzles.map(puzzle => ({...puzzle, optional: level.optional})));
    const sackRequired = sackPuzzles.filter(x => !x.optional);
    const sackOptional = sackPuzzles.filter(x => x.optional);
    const deductivePuzzles = DATA.levels.flatMap(l => l.topics.flatMap(t => t.puzzles.map(p => ({...p, optional: l.optional}))));
    const deductiveRequired = deductivePuzzles.filter(p => !p.optional);
    const deductiveOptional = deductivePuzzles.filter(p => p.optional);
    const result = {
      pathfinding: {solved: pathRequired.filter(puzzle => state.pathfinding.solved[puzzle.id]).length, total: pathRequired.length, optionalSolved: pathOptional.filter(puzzle => state.pathfinding.solved[puzzle.id]).length, optionalTotal: pathOptional.length},
      queens: {solved: queenRequired.filter(x => state.queens.solved[x.n]).length, total: queenRequired.length, optionalSolved: queenOptional.filter(x => state.queens.solved[x.n]).length, optionalTotal: queenOptional.length},
      knapsack: {solved: sackRequired.filter(x => state.knapsack.solved[x.id]).length, total: sackRequired.length, optionalSolved: sackOptional.filter(x => state.knapsack.solved[x.id]).length, optionalTotal: sackOptional.length},
      deduction: {solved: deductiveRequired.filter(x => state.deduction.solved[x.id]).length, total: deductiveRequired.length, optionalSolved: deductiveOptional.filter(x => state.deduction.solved[x.id]).length, optionalTotal: deductiveOptional.length},
    };
    result.total = REQUIRED_GAMES.reduce((sum, id) => sum + result[id].total, 0);
    result.solved = REQUIRED_GAMES.reduce((sum, id) => sum + result[id].solved, 0);
    return result;
  }

  function renderHeader() {
    document.documentElement.lang = state.lang;
    document.getElementById('saveButton').textContent = tr('save');
    document.getElementById('loadButton').textContent = tr('load');
    document.getElementById('loadButton').title = tr('load');
    document.getElementById('resetButton').textContent = tr('reset');
    document.getElementById('langToggle').innerHTML = ['en','vi'].map(lang => `<button type="button" class="${state.lang === lang ? 'active' : ''}" data-lang="${lang}">${lang.toUpperCase()}</button>`).join('');
    const p = progress();
    const pct = p.total ? Math.round(p.solved / p.total * 100) : 0;
    document.getElementById('globalProgress').innerHTML = `<div class="progress-copy"><span>${tr('overall')}</span><span>${tr('solved',{a:p.solved,b:p.total})} · ${pct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`;
  }

  function render() {
    renderHeader();
    if (!DATA || !PATH_DATA) {
      app.innerHTML = '<p class="error">Game data could not be loaded. Keep all files inside the combined_game folder together.</p>';
      return;
    }
    if (!state.active) renderHome();
    else if (state.active === 'pathfinding') renderPathfinding();
    else if (state.active === 'queens') renderQueens();
    else if (state.active === 'knapsack') renderKnapsack();
    else renderDeduction();
    if (tutorial) window.setTimeout(updateTutorial, 0);
  }

  function gameCard(id, number, icon) {
    const p = progress()[id];
    return `<button class="game-card" type="button" data-open="${id}"><span class="card-number">0${number} · ${optionalLabel(false)}</span><span class="card-illustration">${icon}</span><h2>${tr(id)}</h2><p>${tr(id + 'Desc')}</p><span class="card-footer"><span>${tr('solved',{a:p.solved,b:p.total})} · ${tr('optionalProgress',{a:p.optionalSolved,b:p.optionalTotal})}</span><span class="card-arrow">→</span></span></button>`;
  }
  function renderHome() {
    const p = progress();
    app.innerHTML = `<section class="hero"><div><span class="eyebrow">${tr('homeEyebrow')}</span><h1>${tr('homeTitle')}</h1><p>${tr('homeText')}</p></div><aside class="hero-note"><span class="eyebrow">${tr('counted')}</span><strong>${p.total} puzzles</strong><span class="muted">${tr('optionalNote')}</span></aside></section><section class="game-grid">${gameCard('pathfinding',1,'⌁')}${gameCard('queens',2,'♛')}${gameCard('knapsack',3,'🧺')}${gameCard('deduction',4,'∴')}</section>`;
  }
  function shell(icon, title, description, body) {
    const animationClass = animateShell ? ' animate-enter' : '';
    animateShell = false;
    return `<section class="game-shell${animationClass}"><header class="game-heading"><div class="game-title-row"><span class="big-icon">${icon}</span><div><h1>${title}</h1><p>${description}</p></div></div><div class="heading-actions"><button class="button ghost" data-action="tutorial">? ${tr('tutorial')}</button><button class="button ghost" data-action="home">← ${tr('back')}</button></div></header>${body}</section>`;
  }

  function currentPathPuzzle() {
    const level = PATH_DATA.levels.find(item => item.level === Number(state.pathfinding.level)) || PATH_DATA.levels[0];
    const savedId = state.pathfinding.puzzle[level.level];
    const puzzle = level.puzzles.find(item => item.id === savedId) || level.puzzles[0];
    state.pathfinding.puzzle[level.level] = puzzle.id;
    return {level, puzzle};
  }
  function pathEdge(puzzle, from, to) {
    return puzzle.graph.edges.find(edge => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
  }
  function pathCost(puzzle, route) {
    let cost = 0;
    for (let index = 1; index < route.length; index++) {
      const edge = pathEdge(puzzle, route[index - 1], route[index]);
      if (!edge) return null;
      cost += edge.weight;
    }
    return cost;
  }
  function pathWeightPositions(puzzle, labelBounds = {left: 145, right: 655, top: 60, bottom: 535}) {
    const placed = [], vertices = puzzle.graph.vertices;
    const vertexById = new Map(vertices.map(vertex => [vertex.id, vertex]));
    const alongFractions = [0, -.1, .1, -.18, .18, -.26, .26];
    const perpendicularOffsets = [0, 24, -24, 38, -38, 52, -52];
    const pointSegmentDistance = (point, start, end) => {
      const dx = end.x - start.x, dy = end.y - start.y, lengthSquared = dx * dx + dy * dy;
      if (!lengthSquared) return Math.hypot(point.x - start.x, point.y - start.y);
      const amount = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared));
      return Math.hypot(point.x - (start.x + amount * dx), point.y - (start.y + amount * dy));
    };
    puzzle.graph.edges.forEach((edge, edgeIndex) => {
      const from = vertexById.get(edge.from), to = vertexById.get(edge.to);
      const dx = to.x - from.x, dy = to.y - from.y, length = Math.hypot(dx, dy) || 1;
      const unitX = dx / length, unitY = dy / length, perpendicularX = -unitY, perpendicularY = unitX;
      const midpoint = {x: (from.x + to.x) / 2, y: (from.y + to.y) / 2};
      let best = null;
      alongFractions.forEach(alongFraction => perpendicularOffsets.forEach(perpendicularOffset => {
        const along = alongFraction * length;
        const candidate = {
          x: midpoint.x + unitX * along + perpendicularX * perpendicularOffset,
          y: midpoint.y + unitY * along + perpendicularY * perpendicularOffset,
        };
        let score = Math.hypot(along, perpendicularOffset) * .2;
        const outsideX = Math.max(0, labelBounds.left - candidate.x, candidate.x - labelBounds.right);
        const outsideY = Math.max(0, labelBounds.top - candidate.y, candidate.y - labelBounds.bottom);
        score += (outsideX * outsideX + outsideY * outsideY) * 10000;
        placed.forEach(label => {
          const distance = Math.hypot(candidate.x - label.x, candidate.y - label.y);
          const overlap = Math.max(0, 48 - distance);
          score += overlap * overlap * 5000;
        });
        vertices.forEach(vertex => {
          const distance = Math.hypot(candidate.x - vertex.x, candidate.y - vertex.y);
          const overlap = Math.max(0, 54 - distance);
          score += overlap * overlap * 900;
        });
        puzzle.graph.edges.forEach((otherEdge, otherIndex) => {
          if (otherIndex === edgeIndex) return;
          const distance = pointSegmentDistance(candidate, vertexById.get(otherEdge.from), vertexById.get(otherEdge.to));
          const overlap = Math.max(0, 22 - distance);
          score += overlap * overlap * 35;
        });
        if (!best || score < best.score) best = {...candidate, score};
      }));
      placed.push({key: [edge.from, edge.to].sort().join('|'), x: best.x, y: best.y});
    });
    return new Map(placed.map(position => [position.key, position]));
  }
  function pathDisplayLayout(puzzle, levelNumber) {
    const horizontalSpread = levelNumber >= 4 ? 1.3 : 1;
    const centerX = 400, baseViewBoxWidth = 560;
    const viewBoxWidth = baseViewBoxWidth * horizontalSpread;
    const viewBoxX = centerX - viewBoxWidth / 2;
    const displayVertices = puzzle.graph.vertices.map(vertex => ({
      ...vertex,
      x: centerX + (vertex.x - centerX) * horizontalSpread,
    }));
    return {
      horizontalSpread,
      viewBoxX,
      viewBoxWidth,
      labelBounds: {left: viewBoxX + 25, right: viewBoxX + viewBoxWidth - 25, top: 60, bottom: 535},
      puzzle: {...puzzle, graph: {...puzzle.graph, vertices: displayVertices}},
    };
  }
  function pathWeightGuide(from, to, position) {
    const dx = to.x - from.x, dy = to.y - from.y, lengthSquared = dx * dx + dy * dy;
    const amount = lengthSquared
      ? Math.max(0, Math.min(1, ((position.x - from.x) * dx + (position.y - from.y) * dy) / lengthSquared))
      : 0;
    const edgePoint = {x: from.x + amount * dx, y: from.y + amount * dy};
    const guideX = position.x - edgePoint.x, guideY = position.y - edgePoint.y;
    const distance = Math.hypot(guideX, guideY);
    if (distance <= 20) return null;
    const labelClearance = 20;
    return {
      x1: edgePoint.x,
      y1: edgePoint.y,
      x2: position.x - guideX / distance * labelClearance,
      y2: position.y - guideY / distance * labelClearance,
    };
  }
  function renderPathfinding() {
    const {level, puzzle} = currentPathPuzzle(), route = state.pathfinding.selected[puzzle.id] || [], feedback = state.pathfinding.feedback[puzzle.id];
    const optional = level.level >= 4, puzzleIndex = level.puzzles.findIndex(item => item.id === puzzle.id), cost = pathCost(puzzle, route) || 0;
    const displayLayout = pathDisplayLayout(puzzle, level.level), displayPuzzle = displayLayout.puzzle;
    const routeEdges = new Set(route.slice(1).map((vertex, index) => [route[index], vertex].sort().join('|')));
    const levels = PATH_DATA.levels.map(item => {
      const solved = item.puzzles.filter(candidate => state.pathfinding.solved[candidate.id]).length, isOptional = item.level >= 4;
      return `<button class="level-button ${item.level === level.level ? 'active' : ''}" data-path-level="${item.level}"><span>${tr('level')} ${item.level}</span><span class="${isOptional ? 'optional-tag' : 'mini-status'}">${isOptional ? '★ ' : ''}${solved}/${item.puzzles.length}</span></button>`;
    }).join('');
    const dots = level.puzzles.map((item, index) => `<button class="puzzle-dot ${item.id === puzzle.id ? 'active' : ''} ${state.pathfinding.solved[item.id] ? 'solved' : ''}" data-path-puzzle="${item.id}" title="${tr('puzzle')} ${index + 1}">${index + 1}</button>`).join('');
    const weightPositions = pathWeightPositions(displayPuzzle, displayLayout.labelBounds);
    const edgeLines = displayPuzzle.graph.edges.map(edge => {
      const from = displayPuzzle.graph.vertices.find(vertex => vertex.id === edge.from), to = displayPuzzle.graph.vertices.find(vertex => vertex.id === edge.to);
      const key = [edge.from, edge.to].sort().join('|'), active = routeEdges.has(key);
      return `<g class="path-edge ${active ? 'selected' : ''}" data-path-edge="${key}"><line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line></g>`;
    }).join('');
    const edgeGuides = displayPuzzle.graph.edges.map(edge => {
      const from = displayPuzzle.graph.vertices.find(vertex => vertex.id === edge.from), to = displayPuzzle.graph.vertices.find(vertex => vertex.id === edge.to);
      const key = [edge.from, edge.to].sort().join('|'), position = weightPositions.get(key), active = routeEdges.has(key);
      const guide = pathWeightGuide(from, to, position);
      return guide ? `<line class="edge-weight-guide ${active ? 'selected' : ''}" data-path-weight-guide="${key}" x1="${guide.x1.toFixed(1)}" y1="${guide.y1.toFixed(1)}" x2="${guide.x2.toFixed(1)}" y2="${guide.y2.toFixed(1)}" aria-hidden="true"></line>` : '';
    }).join('');
    const edgeWeights = displayPuzzle.graph.edges.map(edge => {
      const key = [edge.from, edge.to].sort().join('|'), position = weightPositions.get(key), active = routeEdges.has(key);
      return `<g class="edge-weight ${active ? 'selected' : ''}" data-path-weight="${key}" transform="translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})"><circle r="18"></circle><text y="5">${edge.weight}</text></g>`;
    }).join('');
    const vertices = displayPuzzle.graph.vertices.map(vertex => {
      const index = route.indexOf(vertex.id), selected = index >= 0, endpoint = vertex.id === puzzle.startVertex ? 'start' : (vertex.id === puzzle.endVertex ? 'end' : '');
      return `<g class="path-vertex ${selected ? 'selected' : ''} ${endpoint}" data-path-vertex="${vertex.id}" tabindex="0" role="button" aria-label="Vertex ${vertex.label}"><circle cx="${vertex.x}" cy="${vertex.y}" r="25"></circle><text x="${vertex.x}" y="${vertex.y + 6}">${esc(vertex.label)}</text>${selected ? `<g class="route-order" transform="translate(${vertex.x + 22} ${vertex.y - 22})"><circle r="11"></circle><text y="4">${index + 1}</text></g>` : ''}</g>`;
    }).join('');
    const routeHtml = route.length ? route.map((vertex, index) => `<button type="button" class="route-step" data-path-truncate="${index}" title="${tr('pathUndo')}"><span>${index + 1}</span>${esc(vertex)}</button>`).join('<i>→</i>') : `<span class="muted">${tr('pathEmpty', {start: puzzle.startVertex})}</span>`;
    const wideClass = displayLayout.horizontalSpread > 1 ? ' spread-wide' : '';
    const body = `<div class="workspace path-workspace"><aside class="side-panel"><p class="side-label">${tr('level')}</p><div class="level-list">${levels}</div><div class="side-divider"></div><p class="side-label">${tr('puzzle')}</p><div class="puzzle-dots path-puzzle-dots">${dots}</div><div class="side-divider"></div><p class="side-tip">${tr('optionalNote')}</p></aside><section class="play-panel"><div class="panel-top"><div><span class="eyebrow">${optionalLabel(optional)} · ${tr('level')} ${level.level}</span><h2>${tr('puzzle')} ${puzzleIndex + 1}/${level.puzzles.length}</h2><p>${tr('pathPrompt', {start: puzzle.startVertex, end: puzzle.endVertex})}</p></div>${state.pathfinding.solved[puzzle.id] ? '<span class="status-pill">✓ Solved</span>' : ''}</div><div class="path-targets"><div><small>${tr('pathStart')}</small><strong>${puzzle.startVertex}</strong></div><span>→</span><div><small>${tr('pathEnd')}</small><strong>${puzzle.endVertex}</strong></div><div class="path-cost"><small>${tr('pathCost')}</small><strong>${cost}</strong></div></div><div class="path-graph${wideClass}" data-horizontal-spread="${displayLayout.horizontalSpread}"><svg viewBox="${displayLayout.viewBoxX} 35 ${displayLayout.viewBoxWidth} 525" role="img" aria-label="Weighted graph for ${esc(puzzle.id)}">${edgeLines}${edgeGuides}${edgeWeights}${vertices}</svg></div><div class="path-route"><div><span class="side-label">${tr('pathSelected')}</span><div class="route-steps">${routeHtml}</div></div><div class="path-controls"><button class="button ghost" data-action="clear-path" ${route.length ? '' : 'disabled'}>${tr('clear')}</button><button class="button primary" data-action="check-path" ${route.at(-1) === puzzle.endVertex ? '' : 'disabled'}>${tr('check')}</button></div></div>${feedback ? `<div class="feedback ${feedback.good ? 'good' : 'bad'}">${feedback.text}</div>` : ''}<div class="puzzle-nav"><button class="button ghost" data-path-move="-1" ${puzzleIndex === 0 ? 'disabled' : ''}>← ${tr('previous')}</button><button class="button ghost" data-path-move="1" ${puzzleIndex === level.puzzles.length - 1 ? 'disabled' : ''}>${tr('next')} →</button></div></section></div>`;
    app.innerHTML = shell('⌁', tr('pathfinding'), tr('pathfindingDesc'), body);
    const wideGraph = app.querySelector('.path-graph.spread-wide');
    if (wideGraph) wideGraph.scrollLeft = (wideGraph.scrollWidth - wideGraph.clientWidth) / 2;
  }

  function queenBoard(n) { return state.queens.boards[n] || (state.queens.boards[n] = []); }
  function queenConflicts(board) {
    const bad = new Set();
    for (let i = 0; i < board.length; i++) for (let j = i + 1; j < board.length; j++) {
      const [r1,c1] = board[i].split(',').map(Number), [r2,c2] = board[j].split(',').map(Number);
      if (r1 === r2 || c1 === c2 || Math.abs(r1-r2) === Math.abs(c1-c2)) { bad.add(board[i]); bad.add(board[j]); }
    }
    return bad;
  }
  function queenMoveCells(board, n) {
    const moves = new Set();
    board.forEach(position => {
      const [queenRow, queenCol] = position.split(',').map(Number);
      for (let row = 0; row < n; row++) for (let col = 0; col < n; col++) {
        if (row === queenRow && col === queenCol) continue;
        const reachable = row === queenRow || col === queenCol ||
          row - col === queenRow - queenCol || row + col === queenRow + queenCol;
        if (reachable) moves.add(`${row},${col}`);
      }
    });
    return moves;
  }
  function currentQueenLevel() {
    return QUEEN_LEVELS.find(level => level.id === Number(state.queens.level)) || QUEEN_LEVELS[0];
  }
  function renderQueens() {
    const level = currentQueenLevel(), n = level.n, board = queenBoard(n), conflicts = queenConflicts(board), moves = queenMoveCells(board, n), feedback = state.queens.feedback[n];
    const levels = QUEEN_LEVELS.map(item => `<button class="level-button ${item.id === level.id ? 'active' : ''}" data-queen-level="${item.id}"><span>${tr('level')} ${item.id}</span><span class="${item.optional ? 'optional-tag' : 'mini-status'}">${item.optional ? '★' : (state.queens.solved[item.n] ? '✓' : item.n + 'Q')}</span></button>`).join('');
    let squares = '';
    for (let row=0; row<n; row++) for (let col=0; col<n; col++) {
      const key = `${row},${col}`, occupied = board.includes(key);
      const reachable = moves.has(key) && !occupied;
      squares += `<button class="square ${(row+col)%2 ? 'dark':'light'} ${reachable ? 'queen-move' : ''} ${conflicts.has(key) ? 'conflict':''}" style="font-size:clamp(18px,${Math.max(2.3,6.2-n*.35)}vw,54px)" data-queen-cell="${key}" aria-label="Row ${row+1}, column ${col+1}">${occupied ? '<span class="queen">♛</span>' : ''}</button>`;
    }
    const body = `<div class="workspace"><aside class="side-panel"><p class="side-label">${tr('level')}</p><div class="level-list">${levels}</div><div class="side-divider"></div><p class="side-tip">${tr('optionalNote')}</p></aside><section class="play-panel"><div class="panel-top"><div><span class="eyebrow">${optionalLabel(level.optional)} · ${tr('level')} ${level.id}</span><h2>${n} × ${n}</h2><p>${tr('queensIntro',{n})}</p></div>${state.queens.solved[n] ? '<span class="status-pill">✓ Solved</span>' : ''}</div><div class="queen-layout"><div class="chessboard" style="grid-template-columns:repeat(${n},1fr);grid-template-rows:repeat(${n},1fr)">${squares}</div><aside><div class="queen-move-legend"><span class="legend-cells" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span><strong>${tr('queenMoves')}</strong><small>${tr('queenMovesHelp')}</small></span></div><div class="queen-stats"><div class="stat-box"><small>${tr('queensPlaced')}</small><strong>${board.length}/${n}</strong></div><div class="stat-box"><small>${tr('conflicts')}</small><strong>${conflicts.size}</strong></div></div><div class="control-stack"><button class="button primary" data-action="check-queens">${tr('check')}</button><button class="button ghost" data-action="queen-hint">${tr('hint')}</button><button class="button ghost" data-action="clear-queens">${tr('clear')}</button></div>${feedback ? `<div class="feedback ${feedback.good?'good':'bad'}">${feedback.text}</div>` : ''}</aside></div></section></div>`;
    app.innerHTML = shell('♛', tr('queens'), tr('queensDesc'), body);
  }

  function solveQueens(n, fixed) {
    const rows = Array(n).fill(-1);
    for (const pos of fixed) { const [r,c]=pos.split(',').map(Number); if (rows[r] !== -1 && rows[r] !== c) return null; rows[r]=c; }
    function safe(r,c) { for (let rr=0; rr<n; rr++) if (rows[rr] >= 0 && rr !== r && (rows[rr] === c || Math.abs(rr-r) === Math.abs(rows[rr]-c))) return false; return true; }
    if (fixed.some(pos => { const [r,c]=pos.split(',').map(Number); const old=rows[r]; rows[r]=-1; const ok=safe(r,c); rows[r]=old; return !ok; })) return null;
    function place(r) { if (r===n) return true; if (rows[r]>=0) return place(r+1); for(let c=0;c<n;c++) if(safe(r,c)){rows[r]=c;if(place(r+1))return true;rows[r]=-1;} return false; }
    return place(0) ? rows.map((c,r)=>`${r},${c}`) : null;
  }

  function currentSack() {
    const level = KNAPSACK_LEVELS.find(x => x.id === Number(state.knapsack.level)) || KNAPSACK_LEVELS[0];
    const savedId = state.knapsack.puzzle[level.id];
    const puzzle = level.puzzles.find(item => item.id === savedId) || level.puzzles[0];
    state.knapsack.puzzle[level.id] = puzzle.id;
    return {level, puzzle};
  }
  function sackSelected(puzzle) { return state.knapsack.selected[puzzle.id] || (state.knapsack.selected[puzzle.id] = []); }
  function sackTotals(puzzle, selected) {
    return puzzle.items.filter(item => selected.includes(item.id)).reduce((totals, item) => ({weight: totals.weight + item.weight, value: totals.value + item.value}), {weight: 0, value: 0});
  }
  function sackOptimum(puzzle) {
    let best = 0;
    for (let mask = 0; mask < 2 ** puzzle.items.length; mask++) {
      let weight = 0, value = 0;
      puzzle.items.forEach((item, index) => { if (mask & (1 << index)) { weight += item.weight; value += item.value; } });
      if (weight <= puzzle.capacity && value > best) best = value;
    }
    return best;
  }
  function itemHTML(item, inBasket) {
    return `<button class="item-card ${inBasket?'in-basket':''}" type="button" draggable="true" data-item="${item.id}" data-action="toggle-item"><span class="emoji">${item.emoji}</span><span class="item-name">${esc(state.lang==='vi'?item.vi:item.en)}</span><span class="item-metrics"><span>⚖ ${item.weight} kg</span><span>◆ $${item.value}</span></span></button>`;
  }
  function renderKnapsack() {
    const {level,puzzle}=currentSack(), selected=sackSelected(puzzle), totals=sackTotals(puzzle,selected), feedback=state.knapsack.feedback[puzzle.id];
    const items=orderedItems(puzzle), puzzleIndex=level.puzzles.findIndex(item=>item.id===puzzle.id);
    const levels=KNAPSACK_LEVELS.map(item=>{const solved=item.puzzles.filter(p=>state.knapsack.solved[p.id]).length;return `<button class="level-button ${item.id===level.id?'active':''}" data-sack-level="${item.id}"><span>${tr('level')} ${item.id}</span><span class="${item.optional?'optional-tag':'mini-status'}">${item.optional?'★ ':''}${solved}/${item.puzzles.length}</span></button>`;}).join('');
    const dots=level.puzzles.map((item,index)=>`<button class="puzzle-dot ${item.id===puzzle.id?'active':''} ${state.knapsack.solved[item.id]?'solved':''}" data-sack-puzzle="${item.id}" title="${tr('puzzle')} ${index+1}">${index+1}</button>`).join('');
    const shelf=items.filter(item=>!selected.includes(item.id)).map(item=>itemHTML(item,false)).join('');
    const basket=items.filter(item=>selected.includes(item.id)).map(item=>itemHTML(item,true)).join('');
    const body=`<div class="workspace"><aside class="side-panel"><p class="side-label">${tr('level')}</p><div class="level-list">${levels}</div><div class="side-divider"></div><p class="side-label">${tr('puzzle')}</p><div class="puzzle-dots sack-puzzle-dots">${dots}</div><div class="side-divider"></div><p class="side-tip">${tr('optionalNote')}</p></aside><section class="play-panel"><div class="panel-top"><div><span class="eyebrow">${optionalLabel(level.optional)} · ${tr('level')} ${level.id}</span><h2>${tr('puzzle')} ${puzzleIndex+1}/${level.puzzles.length}</h2></div>${state.knapsack.solved[puzzle.id]?'<span class="status-pill">✓ Solved</span>':''}</div><div class="target-banner"><div><span>${tr('capacity')}</span><strong>${puzzle.capacity} kg</strong></div></div><div class="knapsack-layout"><div><p class="side-label">${tr('shelf')}</p><div class="item-shelf" data-drop-zone="shelf">${shelf || `<p class="muted">${tr('basketEmpty')}</p>`}</div></div><div><p class="side-label">${tr('basket')}</p><div class="basket ${totals.weight>puzzle.capacity?'over-capacity':''}" data-drop-zone="basket"><div class="basket-head"><span>🧺</span><strong>${tr('basket')}</strong></div><div class="basket-items">${basket}</div><div class="basket-total"><span>${tr('weight')}: ${totals.weight}/${puzzle.capacity} kg</span><span>${tr('value')}: $${totals.value}</span></div></div><div class="control-stack" style="margin-top:12px"><button class="button primary" data-action="check-knapsack">${tr('check')}</button><button class="button ghost" data-action="clear-knapsack">${tr('clear')}</button></div>${feedback?`<div class="feedback ${feedback.good?'good':'bad'}">${feedback.text}</div>`:''}</div></div></section></div>`;
    app.innerHTML=shell('🧺',tr('knapsack'),tr('knapsackDesc'),body);
  }

  function levelData(id) { return DATA.levels.find(l => l.id === Number(id)) || DATA.levels[0]; }
  function topicData(level, id) { return level.topics.find(t => t.id === id) || level.topics[0]; }
  function currentPuzzle() {
    const level=levelData(state.deduction.level), topic=topicData(level,state.deduction.topic);
    let id=state.deduction.puzzle[`${level.id}.${topic.id}`];
    let puzzle=topic.puzzles.find(p=>p.id===id) || topic.puzzles[0];
    state.deduction.puzzle[`${level.id}.${topic.id}`]=puzzle.id;
    return {level,topic,puzzle};
  }
  function renderDeduction() {
    const {level,topic,puzzle}=currentPuzzle(), selected=state.deduction.selected[puzzle.id] || [], feedback=state.deduction.feedback[puzzle.id];
    const levelButtons=DATA.levels.map(x=>{ const all=x.topics.flatMap(t=>t.puzzles), solved=all.filter(p=>state.deduction.solved[p.id]).length; return `<button class="level-button ${x.id===level.id?'active':''}" data-deduction-level="${x.id}"><span>${tr('level')} ${x.id}</span><span class="${x.optional?'optional-tag':'mini-status'}">${x.optional?'★':solved+'/'+all.length}</span></button>`; }).join('');
    const topicTabs=level.topics.map(t=>`<button class="topic-tab ${t.id===topic.id?'active':''}" data-topic="${t.id}">${esc(text(t.title))}</button>`).join('');
    const dots=topic.puzzles.map((p,i)=>`<button class="puzzle-dot ${p.id===puzzle.id?'active':''} ${state.deduction.solved[p.id]?'solved':''}" data-puzzle="${p.id}" title="${tr('puzzle')} ${i+1}">${i+1}</button>`).join('');
    const premises=puzzle.premises.map(p=>{
      const issue=p.languageIssue;
      const issueNote=issue?`<div class="language-issue-note"><span class="language-issue-badge">${tr('languageIssueBadge')}</span><p>${tr('languageIssueText')}</p><p><strong>${tr('suggestedReading')}:</strong> ${esc(text(issue.suggestedReading))}</p><small>${tr('formalLanguageNote')}</small></div>`:'';
      return `<li class="premise ${issue?'has-language-issue':''}"><span class="premise-copy">${esc(text(p.natural))}</span><code class="symbolic">${esc(p.symbolic)}</code>${issueNote}</li>`;
    }).join('');
    const conclusions=orderedConclusions(puzzle).map(c=>`<button class="conclusion ${selected.includes(c.id)?'selected':''}" data-conclusion="${c.id}" type="button"><span class="check-box">${selected.includes(c.id)?'✓':''}</span><span>${esc(text(c.natural))}<br><code class="symbolic">${esc(c.symbolic)}</code></span></button>`).join('');
    const pIndex=topic.puzzles.findIndex(p=>p.id===puzzle.id);
    const languageBanner=level.id>=3?`<div class="language-warning"><strong>${tr('languageWarningTitle')}</strong><span>${tr('languageWarning')}</span></div>`:'';
    const body=`<div class="workspace deduction-workspace"><aside class="side-panel"><p class="side-label">${tr('level')}</p><div class="level-list">${levelButtons}</div><div class="side-divider"></div><p class="side-label">${tr('topic')}</p><div class="topic-tabs">${topicTabs}</div><p class="side-label">${tr('puzzle')}</p><div class="puzzle-dots">${dots}</div><div class="side-divider"></div><p class="side-tip">${tr('optionalNote')}</p></aside><section class="play-panel"><div class="logic-toolbar"><div><span class="eyebrow">${optionalLabel(level.optional)} · ${esc(text(topic.title))}</span><h2 style="margin:5px 0">${tr('puzzle')} ${pIndex+1}/${topic.puzzles.length}</h2></div><span class="status-pill">${tr('selected',{a:selected.length,b:puzzle.requiredSelections})}</span></div>${languageBanner}<div class="context-card"><strong>${esc(text(puzzle.ruleName))}</strong>${esc(text(puzzle.context))}</div><div class="conclusion-head"><h3>${tr('premises')}</h3><span class="muted">${tr('rule')}: ${esc(text(puzzle.ruleName))}</span></div><ol class="premise-list">${premises}</ol><div class="conclusion-head"><div><h3 style="margin-bottom:4px">${tr('conclusions')}</h3><span class="muted">${tr('selectInstruction',{n:puzzle.requiredSelections})}</span></div><button class="button primary" data-action="check-deduction" ${selected.length===puzzle.requiredSelections?'':'disabled'}>${tr('check')}</button></div><div class="conclusion-grid">${conclusions}</div>${feedback?`<div class="feedback ${feedback.good?'good':'bad'}">${feedback.text}</div>`:''}<div class="puzzle-nav"><button class="button ghost" data-deduction-move="-1" ${pIndex===0?'disabled':''}>← ${tr('previous')}</button><button class="button ghost" data-deduction-move="1" ${pIndex===topic.puzzles.length-1?'disabled':''}>${tr('next')} →</button></div></section></div>`;
    app.innerHTML=shell('∴',tr('deduction'),tr('deductionDesc'),body);
  }

  function openGame(id) {
    state.active=id; animateShell=true; saveState(); render(); window.scrollTo({top:0,behavior:'auto'});
    if (!state.tutorials[id]) window.setTimeout(()=>startTutorial(id),120);
  }
  function startTutorial(game) { tutorial={game,index:0}; document.getElementById('tutorialOverlay').hidden=false; updateTutorial(); }
  function updateTutorial() {
    document.querySelectorAll('.tutorial-focus').forEach(el=>el.classList.remove('tutorial-focus'));
    if(!tutorial)return;
    const steps=TUTORIALS[tutorial.game], step=steps[tutorial.index], copy=step[state.lang];
    document.getElementById('tutorialCount').textContent=tr('tutorialStep',{a:tutorial.index+1,b:steps.length});
    document.getElementById('tutorialTitle').textContent=copy[0];
    document.getElementById('tutorialText').textContent=copy[1];
    document.getElementById('tutorialSkip').textContent=tr('skip');
    document.getElementById('tutorialNext').textContent=tutorial.index===steps.length-1?tr('finish'):tr('tutorialNext');
    const target=document.querySelector(step.selector); if(target)target.classList.add('tutorial-focus');
  }
  function closeTutorial(markSeen=true) {
    if(tutorial && markSeen){state.tutorials[tutorial.game]=true;saveState();}
    tutorial=null; document.querySelectorAll('.tutorial-focus').forEach(el=>el.classList.remove('tutorial-focus')); document.getElementById('tutorialOverlay').hidden=true;
  }
  function advanceTutorial(){ if(!tutorial)return; if(tutorial.index<TUTORIALS[tutorial.game].length-1){tutorial.index++;updateTutorial();}else closeTutorial(true); }
  function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600);}
  function celebrate(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const box=document.getElementById('celebration');box.innerHTML='';['◆','●','★','■'].forEach((shape,s)=>{for(let i=0;i<5;i++){const el=document.createElement('span');el.className='confetti';el.textContent=shape;el.style.left=(4+Math.random()*92)+'%';el.style.color=['#ef6f51','#f1b544','#087f78','#203a59'][s];el.style.setProperty('--drift',(Math.random()*180-90)+'px');el.style.animationDelay=(Math.random()*.25)+'s';box.appendChild(el);}});setTimeout(()=>box.innerHTML='',1900);}

  function selectPathVertex(id) {
    const {puzzle} = currentPathPuzzle(), route = state.pathfinding.selected[puzzle.id] || [], existingIndex = route.indexOf(id);
    if (existingIndex >= 0) {
      state.pathfinding.selected[puzzle.id] = route.slice(0, existingIndex + 1);
    } else if (!route.length) {
      if (id !== puzzle.startVertex) { showToast(tr('pathStartFirst', {start: puzzle.startVertex})); return; }
      state.pathfinding.selected[puzzle.id] = [id];
    } else {
      const last = route.at(-1);
      if (last === puzzle.endVertex) { showToast(tr('pathUndo')); return; }
      if (!pathEdge(puzzle, last, id)) { showToast(tr('pathAdjacent', {vertex: last})); return; }
      state.pathfinding.selected[puzzle.id] = [...route, id];
    }
    delete state.pathfinding.feedback[puzzle.id];
    setAndRender();
  }
  function checkPathfinding() {
    const {puzzle} = currentPathPuzzle(), route = state.pathfinding.selected[puzzle.id] || [], cost = pathCost(puzzle, route);
    if (route[0] !== puzzle.startVertex || route.at(-1) !== puzzle.endVertex || cost === null) { showToast(tr('pathIncomplete', {end: puzzle.endVertex})); return; }
    const good = cost === puzzle.solution.totalWeight;
    state.pathfinding.feedback[puzzle.id] = {good, text: good ? tr('pathGood') : tr('pathBad', {cost})};
    if (good && !state.pathfinding.solved[puzzle.id]) { state.pathfinding.solved[puzzle.id] = true; celebrate(); }
    setAndRender();
  }

  function toggleItem(id, force) {
    const {puzzle}=currentSack(), list=sackSelected(puzzle), has=list.includes(id), shouldAdd=force===undefined?!has:force;
    state.knapsack.selected[puzzle.id]=shouldAdd?[...new Set([...list,id])]:list.filter(x=>x!==id); delete state.knapsack.feedback[puzzle.id]; setAndRender();
  }
  function checkKnapsack(){const {puzzle}=currentSack(),selected=sackSelected(puzzle),totals=sackTotals(puzzle,selected),optimum=sackOptimum(puzzle),good=totals.weight<=puzzle.capacity&&totals.value===optimum;let message=tr('basketGood');if(totals.weight>puzzle.capacity)message=tr('basketOver',{amount:totals.weight-puzzle.capacity});else if(!good)message=tr('basketSuboptimal');state.knapsack.feedback[puzzle.id]={good,text:message};if(good&&!state.knapsack.solved[puzzle.id]){state.knapsack.solved[puzzle.id]=true;celebrate();}setAndRender();}
  function checkQueens(){const n=currentQueenLevel().n,board=queenBoard(n),bad=queenConflicts(board);let good=false,message;if(board.length!==n)message=tr('queensBadCount',{n});else if(bad.size)message=tr('queensBadConflict');else{good=true;message=tr('queensGood');}state.queens.feedback[n]={good,text:message};if(good&&!state.queens.solved[n]){state.queens.solved[n]=true;celebrate();}setAndRender();}
  function checkDeduction(){const {puzzle}=currentPuzzle(),selected=state.deduction.selected[puzzle.id]||[];if(selected.length!==puzzle.requiredSelections){showToast(tr('chooseExact',{n:puzzle.requiredSelections}));return;}const valid=puzzle.conclusions.filter(c=>c.valid).map(c=>c.id),good=valid.every(id=>selected.includes(id))&&selected.every(id=>valid.includes(id));state.deduction.feedback[puzzle.id]={good,text:good?tr('deductionGood'):tr('deductionBad')};if(good&&!state.deduction.solved[puzzle.id]){state.deduction.solved[puzzle.id]=true;celebrate();}setAndRender();}

  app.addEventListener('click', event => {
    const open=event.target.closest('[data-open]'); if(open){openGame(open.dataset.open);return;}
    const action=event.target.closest('[data-action]')?.dataset.action;
    if(action==='home'){state.active=null;setAndRender();return;} if(action==='tutorial'){startTutorial(state.active);return;}
    const pathLevel=event.target.closest('[data-path-level]');if(pathLevel){state.pathfinding.level=Number(pathLevel.dataset.pathLevel);setAndRender();return;}
    const pathPuzzleButton=event.target.closest('[data-path-puzzle]');if(pathPuzzleButton){const {level}=currentPathPuzzle();state.pathfinding.puzzle[level.level]=pathPuzzleButton.dataset.pathPuzzle;setAndRender();return;}
    const pathVertex=event.target.closest('[data-path-vertex]');if(pathVertex){selectPathVertex(pathVertex.dataset.pathVertex);return;}
    const pathTruncate=event.target.closest('[data-path-truncate]');if(pathTruncate){const {puzzle}=currentPathPuzzle(),route=state.pathfinding.selected[puzzle.id]||[];state.pathfinding.selected[puzzle.id]=route.slice(0,Number(pathTruncate.dataset.pathTruncate)+1);delete state.pathfinding.feedback[puzzle.id];setAndRender();return;}
    if(action==='check-path'){checkPathfinding();return;}if(action==='clear-path'){const {puzzle}=currentPathPuzzle();state.pathfinding.selected[puzzle.id]=[];delete state.pathfinding.feedback[puzzle.id];setAndRender();return;}
    const pathMove=event.target.closest('[data-path-move]');if(pathMove){const {level,puzzle}=currentPathPuzzle(),index=level.puzzles.findIndex(item=>item.id===puzzle.id),target=level.puzzles[index+Number(pathMove.dataset.pathMove)];if(target)state.pathfinding.puzzle[level.level]=target.id;setAndRender();return;}
    const qLevel=event.target.closest('[data-queen-level]'); if(qLevel){state.queens.level=Number(qLevel.dataset.queenLevel);setAndRender();return;}
    const qCell=event.target.closest('[data-queen-cell]'); if(qCell){const n=currentQueenLevel().n,board=queenBoard(n),key=qCell.dataset.queenCell;state.queens.boards[n]=board.includes(key)?board.filter(x=>x!==key):[...board,key];delete state.queens.feedback[n];setAndRender();return;}
    if(action==='check-queens'){checkQueens();return;} if(action==='clear-queens'){const n=currentQueenLevel().n;state.queens.boards[n]=[];delete state.queens.feedback[n];setAndRender();return;}
    if(action==='queen-hint'){const n=currentQueenLevel().n,board=queenBoard(n),solution=solveQueens(n,board);if(!solution){showToast(tr('noHint'));return;}const next=solution.find(x=>!board.includes(x));if(next)state.queens.boards[n]=[...board,next];setAndRender();return;}
    const sackLevel=event.target.closest('[data-sack-level]');if(sackLevel){state.knapsack.level=Number(sackLevel.dataset.sackLevel);setAndRender();return;}
    const sackPuzzleButton=event.target.closest('[data-sack-puzzle]');if(sackPuzzleButton){const {level}=currentSack();state.knapsack.puzzle[level.id]=sackPuzzleButton.dataset.sackPuzzle;setAndRender();return;}
    const item=event.target.closest('[data-item]');if(action==='toggle-item'&&item){toggleItem(item.dataset.item);return;}
    if(action==='check-knapsack'){checkKnapsack();return;}if(action==='clear-knapsack'){const {puzzle}=currentSack();state.knapsack.selected[puzzle.id]=[];delete state.knapsack.feedback[puzzle.id];setAndRender();return;}
    const dLevel=event.target.closest('[data-deduction-level]');if(dLevel){state.deduction.level=Number(dLevel.dataset.deductionLevel);state.deduction.topic='school';setAndRender();return;}
    const topic=event.target.closest('[data-topic]');if(topic){state.deduction.topic=topic.dataset.topic;setAndRender();return;}
    const puzzle=event.target.closest('[data-puzzle]');if(puzzle){const {level,topic}=currentPuzzle();state.deduction.puzzle[`${level.id}.${topic.id}`]=puzzle.dataset.puzzle;setAndRender();return;}
    const conclusion=event.target.closest('[data-conclusion]');if(conclusion){const {puzzle}=currentPuzzle(),list=state.deduction.selected[puzzle.id]||[],id=conclusion.dataset.conclusion;if(!list.includes(id)&&list.length>=puzzle.requiredSelections){showToast(tr('maxChosen',{n:puzzle.requiredSelections}));return;}state.deduction.selected[puzzle.id]=list.includes(id)?list.filter(x=>x!==id):[...list,id];delete state.deduction.feedback[puzzle.id];setAndRender();return;}
    if(action==='check-deduction'){checkDeduction();return;}
    const move=event.target.closest('[data-deduction-move]');if(move){const {level,topic,puzzle}=currentPuzzle(),i=topic.puzzles.findIndex(p=>p.id===puzzle.id),target=topic.puzzles[i+Number(move.dataset.deductionMove)];if(target)state.deduction.puzzle[`${level.id}.${topic.id}`]=target.id;setAndRender();}
  });

  app.addEventListener('keydown', event => {
    const vertex = event.target.closest('[data-path-vertex]');
    if (vertex && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); selectPathVertex(vertex.dataset.pathVertex); }
  });

  app.addEventListener('dragstart', event => {const item=event.target.closest('[data-item]');if(item){event.dataTransfer.setData('text/plain',item.dataset.item);event.dataTransfer.effectAllowed='move';}});
  app.addEventListener('dragover', event => {const zone=event.target.closest('[data-drop-zone]');if(zone){event.preventDefault();zone.classList.add('drag-over');}});
  app.addEventListener('dragleave', event => {const zone=event.target.closest('[data-drop-zone]');if(zone&&!zone.contains(event.relatedTarget))zone.classList.remove('drag-over');});
  app.addEventListener('drop', event => {const zone=event.target.closest('[data-drop-zone]');if(!zone)return;event.preventDefault();const id=event.dataTransfer.getData('text/plain');zone.classList.remove('drag-over');if(id)toggleItem(id,zone.dataset.dropZone==='basket');});

  document.getElementById('homeButton').addEventListener('click',()=>{state.active=null;setAndRender();});
  document.getElementById('langToggle').addEventListener('click',event=>{const lang=event.target.closest('[data-lang]')?.dataset.lang;if(lang){state.lang=lang;setAndRender();if(tutorial)updateTutorial();}});
  document.getElementById('resetButton').addEventListener('click',()=>{if(confirm(tr('resetConfirm'))){try{localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(LEGACY_STORAGE_KEY_V3);localStorage.removeItem(LEGACY_STORAGE_KEY_V2);localStorage.removeItem(LEGACY_STORAGE_KEY_V1);}catch(_){}state=deepMerge(defaults,{});closeTutorial(false);render();}});
  document.getElementById('saveButton').addEventListener('click',()=>showIdentity(true));
  const loadInput = document.getElementById('loadInput');
  document.getElementById('loadButton').addEventListener('click',()=>loadInput.click());
  loadInput.addEventListener('change',async()=>{
    const file=loadInput.files?.[0];
    if(!file)return;
    try{
      const payload=JSON.parse(await file.text()), compatibility=saveCompatibility(payload), imported=stateFromSave(payload);
      if(!confirm(tr('loadConfirm',{name:file.name})))return;
      state=imported;animateShell=false;closeTutorial(false);saveState();render();
      const messageKey=compatibility.resetKnapsack?'loadedLegacyRules':(compatibility.resetDeduction?'loadedLegacyData':'loadedFile');
      showToast(tr(messageKey,{name:file.name}));
    }catch(_){showToast(tr('loadInvalid'));}
    finally{loadInput.value='';}
  });
  document.getElementById('identityClose').addEventListener('click',()=>showIdentity(false));
  document.getElementById('tutorialSkip').addEventListener('click',()=>closeTutorial(true));
  document.getElementById('tutorialNext').addEventListener('click',advanceTutorial);
  document.getElementById('identityForm').addEventListener('submit',event=>{event.preventDefault();const id=document.getElementById('studentId').value.trim(),name=document.getElementById('studentName').value.trim();if(!id||!name){document.getElementById('identityError').hidden=false;return;}state.identity={id,name};saveState();const payload={app:'Deduction Quest',schema:'info201.lab3.save.v4',savedAt:new Date().toISOString(),student:{id,name},progress:progress(),state:{pathfinding:state.pathfinding,queens:state.queens,knapsack:state.knapsack,deduction:state.deduction},pathDataVersion:PATH_DATA.version,dataSchema:DATA.schema,dataFingerprint:DATA.fingerprint};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a'),safe=id.replace(/[^a-z0-9_-]/gi,'-')||'student',filename=`lab3-${safe}.json`;a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showIdentity(false);showToast(tr('savedFile',{name:filename}));});
  function showIdentity(show){const overlay=document.getElementById('identityOverlay');overlay.hidden=!show;if(!show)return;document.getElementById('identityTitle').textContent=tr('identityTitle');document.getElementById('identityText').textContent=tr('identityText');document.getElementById('studentIdLabel').textContent=tr('studentId');document.getElementById('studentNameLabel').textContent=tr('studentName');document.getElementById('downloadButton').textContent=tr('download');document.getElementById('identityError').textContent=tr('identityError');document.getElementById('identityError').hidden=true;document.getElementById('studentId').value=state.identity.id||'';document.getElementById('studentName').value=state.identity.name||'';setTimeout(()=>document.getElementById('studentId').focus(),0);}

  render();
})();
