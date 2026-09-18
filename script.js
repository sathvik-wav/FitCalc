let age, weight, height, gender, activity, goal, calorie;
        document.querySelector("button").addEventListener("click", function() {
            age = document.getElementById("age").value;
            weight = document.getElementById("weight").value;
            height = document.getElementById("height").value;
            gender = document.getElementById("gender").value;
            activity = document.getElementById("activity").value;
            goal = document.getElementById("goal").value;   
            
            if (!age || !weight || !height || !gender || !activity || !goal) {
             document.getElementById("result").innerHTML = "Please fill all fields!";
  return;
}
           //convert to num
            age = Number(age);
            weight = Number(weight);
            height = Number(height);
            activity = Number(activity);
            //BMR 
            let bmr;
            if(gender === "male") {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            }else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            //TDEE
            let tdee = bmr * activity;
            //adjust calorie
            if (goal === "bulk"){
                calorie = tdee + 300;
            }else if (goal === "cut"){
                calorie = tdee - 500;
            }else {
                calorie = tdee;
            }
            //macros
            let protein = weight * 2;
            let fat = (calorie * 0.25)/9;
            let carbs = (calorie - (protein * 4) - (fat * 9)) / 4;
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML =
            "Calories: " + Math.round(calorie) + "<br>" +
            "Protein: " + Math.round(protein) + "g<br>" +
            "Carbs: " + Math.round(carbs) + "g<br>" +
            "Fat: " + Math.round(fat) + "g<br><br>" +
            "<button type='button' id='lightBtn'>Light Plan</button>"+
            "<button type='button' id='mediumBtn'>Medium Plan</button>"+
            "<button type='button' id='heavyBtn'>Heavy Plan</button>";
        })
        document.addEventListener("click", function(e) {
            let plan = "";
            if (e.target.id === "lightBtn") {
                if (goal === "cut") plan = "LIGHT CUT:<br>Breakfast: Oats<br>Lunch: 3 eggs + 150gms rice + 100gms chicken + salad<br>Snack: Dry fruits + fruits<br>Dinner: 2 roti + 100gms chicken/paneer/tofu + salad + Whey Protein";
                else if (goal === "bulk") plan = "LIGHT BULK:<br>Breakfast: Oats + Whey Protein<br>Lunch: 4 eggs + 150gms rice + 100gms chicken + salad<br>Snack: Dry fruits + fruits + Peanut Butter + Whole Wheat Bread<br>Dinner: 3 roti + 150gms chicken/paneer/tofu + salad + yogurt";
                else plan = "LIGHT MAINTAIN:<br>Breakfast: Oats<br>Lunch: 3 eggs + 200gms rice + 100gms chicken + salad<br>Snack: Dry fruits + fruits<br>Dinner: 3 roti + 100gms chicken/paneer/tofu + salad";
            }if (e.target.id === "mediumBtn") {
                if (goal === "cut") plan = "MEDIUM CUT:<br>Breakfast: Oats<br>Lunch: 4 eggs + 100gms rice + 150gms chicken + salad<br>Snack: Dry fruits + fruits + Banana<br>Dinner: 2 roti + 150gms chicken/paneer/tofu + salad + Whey Protein + Yogurt";
                else if (goal === "bulk") plan = "MEDIUM BULK:<br>Breakfast: Oats<br>Lunch: 5 eggs + 150gms rice + 200gms chicken + salad<br>Snack: Dry fruits + fruits + Banana + PeanutButter + Whole Wheat Bread<br>Dinner: 3 roti + 150gms chicken/paneer/tofu + salad + Whey Protein";
                else plan = "MEDIUM MAINTAIN:<br>Breakfast: Oats<br>Lunch: 3 eggs + 150gms rice + 100gms chicken + salad<br>Snack: Dry fruits + fruits + Banana<br>Dinner: 2 roti + 150gms chicken/paneer/tofu + salad + Whey Protein";
            }if (e.target.id === "heavyBtn") {
                if (goal === "cut") plan = "HEAVY CUT:<br>Breakfast: Oats + Whey Protein<br>Lunch: 5 eggs + 100gms rice + 200gms chicken + salad<br>Snack: Dry fruits + fruits + Banana<br>Dinner: 2 roti + 200gms chicken/paneer/tofu + salad + Whey Protein + Yogurt";
                else if (goal === "bulk") plan = "HEAVY BULK:<br>Breakfast: 2 eggs + Oats + Whey Protein<br>Lunch: 4 eggs + 200gms rice + 200gms chicken + salad<br>Snack: Dry fruits + fruits + Banana + Peanut Butter + Bread<br>Dinner: 3 roti + 200gms chicken/paneer/tofu + salad + Whey Protein + Yogurt";
                else plan = "HEAVY MAINTAIN:<br>Breakfast: Oats<br>Lunch: 4 eggs + 100gms rice + 150gms chicken + salad<br>Snack: Dry fruits + fruits + Banana<br>Dinner: 2 roti + 150gms chicken/paneer/tofu + salad + Whey Protein";
            }
            if (plan !== ""){
                document.getElementById("planResult").style.display = "block";
                document.getElementById("planResult").innerHTML = plan;
            }
    });
