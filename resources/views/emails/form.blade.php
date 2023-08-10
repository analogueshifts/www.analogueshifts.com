<x-mail::message>
# AnalogueShifts Contact Form
Message From: {{ $data['name'] }}
<br>
Subject: {{ $data['subject'] }}
<br>
<x-mail::panel>
Message:
<br>
{{ $data['message'] }}
<br>
Contacts:
<br>
Email:<a color='primary' href="mailto: {{ $data['email'] }}">{{ $data['email'] }}</a>
<br>
Phone Number:<a color='primary' href="tel: {{ $data['tel'] }}">{{ $data['tel'] }}</a>
</x-mail::panel>
</x-mail::message>
