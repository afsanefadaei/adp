var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth: {
		user:'afsoonfadaei@gmail.com',
		pass:'Terme900471834'
	}
});

var mailOptions = {
	from: 'afsoonfadaei@gmail.com',
	to: 'afsanefadaei@hotmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Email sent:'+info.response);
	}
}); 