total_list=[]

while True:
    question=input("질문을 입력해주세요:\n종료하시려면 q누르시오")
    if question =="q":
        break
    else:
        total_list.append({"질문": question, "답변" : ""})
for i in total_list:
    print(i["질문"])
    answer=input("답변을 입력해주세요:")
    i["답변"]=answer
print("질의 응답 결과는",total_list)