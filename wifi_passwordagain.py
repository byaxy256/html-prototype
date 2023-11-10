import subprocess
import re

def get_wifi_passwords():
    result = subprocess.run(["netsh", "wlan", "show", "profiles"], capture_output=True, text=True)
    profiles = re.findall("All User Profile\s*:\s*(.*)", result.stdout)
    passwords = {}

    for profile in profiles:
        profile_info = subprocess.run(["netsh", "wlan", "show", "profile", profile, "keyMaterial"], capture_output=True, text=True)
        password = re.search("Key Content\s*:\s*(.*)", profile_info.stdout)
        if password:
            passwords[profile] = password.group(1)
        else:
            passwords[profile] = "no password"

    return passwords

def print_wifi_passwords():
    passwords = get_wifi_passwords()
    for profile, password in passwords.items():
        print(f"Profile: {profile}\nPassword: {password}\n")

if __name__== "__main__":
  print_wifi_passwords()