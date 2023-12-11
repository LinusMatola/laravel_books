<?php
namespace App\Mailers;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class PHPMailerMailer
{
    protected $mailer;

    public function __construct()
    {
        $this->mailer = new PHPMailer(true); // Enable exceptions
        $this->configure();
    }

    protected function configure()
    {
        $this->mailer->isSMTP();
        $this->mailer->Host = 'smtp.gmail.com';
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = 'your-gmail-email@gmail.com'; // Replace with your Gmail email
        $this->mailer->Password = 'your-gmail-password'; // Replace with your Gmail password
        $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use 'tls' or 'ssl' if necessary
        $this->mailer->Port = 587; // Adjust the port if necessary

        $this->mailer->setFrom('your-gmail-email@gmail.com', 'Your Name'); // Replace with your Gmail email and name
    }

    public function sendEmail($to, $subject, $body)
    {
        try {
            $this->mailer->addAddress($to);
            $this->mailer->Subject = $subject;
            $this->mailer->Body = $body;

            return $this->mailer->send();
        } catch (\Exception $e) {
            // Handle exceptions
            return false;
        }
    }
}
