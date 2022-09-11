var numberOfMonth = prompt ('Write the number and find out what season', '');
if (numberOfMonth==12 || numberOfMonth==1 || numberOfMonth==2) {
 message = 'It is Winter';
}
else if (numberOfMonth > 2 && numberOfMonth <6) {
message = 'It is Spring';  
}
else if (numberOfMonth >= 6 && numberOfMonth <= 8) {
 message = 'It is Summer';   
}
else if (numberOfMonth >=9 && numberOfMonth <= 11) {
message = 'It is Autumn';  
}
else {
message = 'Mistake';
}
alert (message);
