1
        function convert() {
            // 取得輸入的金額
            var amountInTWD = parseFloat(document.getElementById('amount').value);
            
            // 換算比率（假設為1日幣 = 0.27台幣，實際請根據當前匯率修改）
            var exchangeRate = 0.27;
            
            // 計算換算後的金額
            var amountInJPY = amountInTWD / exchangeRate;
            
            // 顯示結果
            document.getElementById('result').innerHTML = amountInTWD + ' 台幣 = ' + amountInJPY.toFixed(2) + ' 日圓';
        }