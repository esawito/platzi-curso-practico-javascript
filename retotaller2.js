const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2
    },
    {
        course: "Programación",
        note: 8,
        credit: 5
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5
    }
];

const notesWithCredit = notes.map(function (noteObjet) {
    return noteObjet.note * noteObjet.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0,newVal) {
    return sum + newVal;
});

const credits = notes.map(function (noteObjet) {
    return noteObjet.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
    return sum + newVal;
});

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit/sumOfCredits;