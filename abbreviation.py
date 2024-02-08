def abbreviation(day):
    days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    if day in days:
        return day[0:2]
print(abbreviation("tuesday"))
    