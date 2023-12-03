import { v4 as uuidv4 } from 'uuid'
export const subjectList = [
    { id: uuidv4(), title: 'Математика' },
    { id: uuidv4(), title: 'Українська мова' },
    { id: uuidv4(), title: 'Фізика' },
    { id: uuidv4(), title: 'Хімія' },
    { id: uuidv4(), title: 'Історія' },
    { id: uuidv4(), title: 'Географія' },
    { id: uuidv4(), title: 'Біологія' },
    { id: uuidv4(), title: 'Англійська мова' },
    { id: uuidv4(), title: 'Література' },
    { id: uuidv4(), title: 'Фізична культура' },
]
const teachers = [
    { id: uuidv4(), name: 'Іванов. П .А.' },
    { id: uuidv4(), name: 'Петров. О .В.' },
    { id: uuidv4(), name: 'Сидоров. І .М.' },
    { id: uuidv4(), name: 'Коваленко. Л .П.' },
    { id: uuidv4(), name: 'Мельник. Г .Р.' },
    { id: uuidv4(), name: 'Шевченко. А .С.' },
    { id: uuidv4(), name: 'Григоренко. Т .О.' },
    { id: uuidv4(), name: 'Козлов. Ю .А.' },
    { id: uuidv4(), name: 'Павленко. С .В.' },
    { id: uuidv4(), name: 'Лисенко. В .М.' },
]
function subjectIdList(subjectList) {
    let idList = []
    for (let index = 0; index < subjectList.length; index++) {
        const randomIndex = Math.floor(Math.random() * subjectList.length)
        if (subjectList[index].id !== subjectList[randomIndex].id) {
            idList.push([subjectList[index].id, subjectList[randomIndex].id])
        } else index--
    }
    return idList
}
function newTeacherList(teacherList, subjectList) {
    const subjectIdArr = subjectIdList(subjectList)
    const newList = teacherList.map((tacher, index) => ({
        ...tacher,
        subjectId: subjectIdArr[index],
    }))
    return newList
}

export const teacherList = newTeacherList(teachers, subjectList)
