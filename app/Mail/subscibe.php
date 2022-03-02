<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class subscibe extends Mailable
{
    use Queueable, SerializesModels;


    public $subject, $email_content;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$subject,$email_content)
    {
        $this->email = $email;
        $this->subject = $subject;
		$this->email_content = $email_content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.subscribe',[
            'email' => $this->email,
		    'subject' => $this->subject,
		    'email_content' => $this->email_content,
        ]);
    }
}
