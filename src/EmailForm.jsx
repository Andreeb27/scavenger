import React, { Fragment, PureComponent, Component } from "react";
import ReactDOM from 'react-dom/client';
import  {SendEmailCommand } from '@aws-sdk/client-ses';
import  {sesClient } from './libs/sesClient';

//const DEFAULT_TEMPLATE_IMG = '/content/images/CS.jpg';
const sourceEmail = 'hotajed147@lidely.com';


export default class PersonalizationComponent extends PureComponent {

  componentDidMount() {
    this.load();
  }

  constructor(props) {
    super(props);

    this.state = {
        emailForm: {
            recipient: "",
            subject: "",
            body: "",
            showImageSpinner: false,
            validationMessages: [],
          }
    };

    this.clearImageSpinner = () => {
      this.setState({ showImageSpinner: false });
    }
    

    this.validateEmailForm = () => {
        let form = {...this.state.emailForm};
        let validationMessages = [];
        if(!form.subject || form.subject.length < 1){
            validationMessages.push({controlName: 'subject', message:'Subject is required!'});
        }
        if(!form.recipient || form.recipient.length < 1){
            validationMessages.push({controlName: 'recipient', message:'Recipient is required!'});
        }
        if(!form.body || form.body < 1){
            validationMessages.push({controlName: 'body', message:'Body is required!'})
        }

        return validationMessages;  
    }


    this.load = () => {
        //put whatever you want in here on page load
    }

    this.clear = () => {
        this.setState({
            emailForm: {
                recipient: "",
                subject: "",
                body: "",
                showImageSpinner: false,
                validationMessages: [],
              }
        });
    }

    this.submit = () => {
        let validationMessages = this.validateEmailForm();
        if(validationMessages.length > 0)
        {
            this.setState({emailForm: {...this.state.emailForm, validationMessages: validationMessages}} );  
        }
        else{
            let sendEmailCommand = createSendEmailCommand(...this.state.emailForm)
            try {
                return sesClient.send(sendEmailCommand);
            } catch (e) {
                console.log("Failed to send email.");
                return e;
            }
       }

    }

    this.handleEmailFormChange = (event, callback) => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            emailForm:{
                ...this.state.emailForm,
                [name]:value,
            },
        }, () => {
          if(callback){
            callback();
          }
        });
            

    }

    this.setEmailFormState = (emailForm, callback) => 
    {
        this.setState({
            emailForm: {
                ...this.state.emailForm,
                ...emailForm
            }
    }, () => callback());
    }
}


  //This is the actual form 
  render() {
    return (
      <Fragment>
<div className = 'form'>
  {/* Email Recipient */}
  <label htmlFor="recipient">To: </label>
  {/* <input type="email" id="recipient" name="recipient" /><br /><br /> */}
  <input
                id="recipient"
                name="recipient"
                value={this.state.emailForm.recipient}
                onChange={(event) => this.handleEmailFormChange(event)}
              />
                            <FieldValidationErrorMessageComponent
                controlName="recipient"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
              <br /><br />
  {/* Subject */}
  <label htmlFor="subject">Subject: </label>
{/* <input type="text" id="subject" name="subject" /><br /><br /> */}
  <input
                id="subject"
                name="subject"
                value={this.state.emailForm.subject}
                onChange={(event) => this.handleEmailFormChange(event)}
              />
                            <FieldValidationErrorMessageComponent
                controlName="subject"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
              <br /><br />
  {/* Email Body */}
  <label htmlFor="body">Message: </label>
  <textarea 
  id="body" 
  name="body" 
  value={this.state.emailForm.body} 
  rows="5" cols="33" 
  onChange={(event) => this.handleEmailFormChange(event)} />
                <FieldValidationErrorMessageComponent
                controlName="body"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
  <br /><br />

  {/* Buttons */}
  <button id="sendEmail" onClick={()=>this.submit()}>Submit</button>
  <button id="cancel" onCancel={this.cancelForm}>Cancel</button>
</div>
</Fragment>
    );
}
}

class FieldValidationErrorMessageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messages = (this.props.errorMessages || []).filter(m => m.controlName === this.props.controlName) ??'';

      return messages.length > 0
        && <ul className="parsley-errors-list filled">
          {messages.map((m, idx) => (<li key={idx} className="parsley-required">{m.message}</li>))}
        </ul>;
    }
};

const createSendEmailCommand = (email) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          email.recipient,
          /* more To-email addresses */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: email.body,
          },
          Text: {
            Charset: "UTF-8",
            Data: email.body,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: email.subject,
        },
      },
      Source: sourceEmail,
      ReplyToAddresses: [
        sourceEmail,
      ],
    });
};