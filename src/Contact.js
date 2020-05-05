import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component{
	constructor(props) {
		super(props);
		this.state = { feedback: '', name: 'User', email: 'email@example.com' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
   
  render(){
    return(

      <div className="parent">

<div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>

               <div class="find-widget">
                 Developer:  <p>Hariom Malviya</p>
                </div>
                <div class="find-widget">
                 Address: <p>Lovely professional university, BH:5</p>
                </div>
                <div class="find-widget">
                  Email:  <p>gurjarhariom3114@gmail.com</p>
                </div>
                
                <div class="find-widget">
                  Linkedin Profile:  <a href="https://www.linkedin.com/in/hariom-malviya-614160148/">Go to Linkedin</a>
                </div>
                
			</div>
		</div>

		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  <label class="control-label col-sm-2" for="fname">First Name:</label>
				  <div class="col-sm-10">          
					<input   type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" required data-error="Please enter your name"/>
				  <div class="help-block with-errors"></div>
          </div>
          
        
				</div>
      
				<div class="form-group">
				  <label class="control-label col-sm-2" for="lname">Last Name:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
				
          </div>
        
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="email">Email:</label>
				  <div class="col-sm-10">
					<input     type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="comment">Comment:</label>
				  <div class="col-sm-10">
					<textarea class="form-control" rows="5" id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="please write... what you really want to share with  us."
        	required
        	value={this.state.feedback}></textarea>
				  </div>
				</div>
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default" onClick={this.handleSubmit}>Submit</button>
          </div><br/>
          <div class="col-sm-offset-2 col-sm-10">
            <a href="/">Back to Home</a>
          </div>
				  
				</div>
			</div>
		</div>
	</div>
</div>
      
      
      </div>
      
          


    

    
    )
  }

  handleChange(event) {
	this.setState({feedback: event.target.value})
	
  }

  handleSubmit (event) {
    const templateId = 'template_0Rp5CFkn';
    

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    alert("your message is mailed to the developer");
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default Contact;