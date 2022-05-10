import time
import random
lunch = []
set_lunch=set(lunch)
while True:
    print(set_lunch)
    item=input("먹고싶은걸 입력해주세요: \n먹기싫은걸 입력하려면 n입력\n종료하고싶으면 q입력")
    if(item == "q"):
        break
    elif(item=="n"):
        item=input("먹기싫은걸 입력해주세요")
        set_lunch=set_lunch-set([item])
    else:
        set_lunch=set_lunch | set([item])
    
print(set_lunch)

print("5초 후에",set_lunch, "중에서 랜덤으로 하나를 선택합니다")

print("5")
time.sleep(1) 

print("4")
time.sleep(1)   

print("3")
time.sleep(1)     

print("2")
time.sleep(1)    
                                                                                                                                                                                                                                                                                                                                               
print("1")
time.sleep(1)   

print("오늘 먹을 메뉴는",random.choice(list(set_lunch)))

