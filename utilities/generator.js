// patient id generator
exports.patient_id_generator = () => {
    let date = new Date();
    let year = date.getFullYear().toString().substr(2, 2);
    let day = date.getDate();

    // check month to two digits
    const month_index =  date.getMonth() + 1;
    const check_month = "0" + month_index;
    if(check_month.length === 3) {
        check_month = date.getMonth() + 1;
    }
    let month = check_month;
    let auto_no = Math.random().toString(9).substr(4, 6);

    return  `${year}${month}-${day}-${auto_no}`;
}

// MR NO generator
exports.mr_no_generator = () => {
    let date = new Date();
    let year = date.getFullYear().toString().substr(2, 2);

    // check month to two digits
    const month_index =  date.getMonth() + 1;
    const check_month = "0" + month_index;
    if(check_month.length === 3) {
        check_month = date.getMonth() + 1;
    }
    let month = check_month;
    let auto_no = Math.random().toString(9).substr(4, 6);

    return  `mr_${year}${month}_${auto_no}`;
}

// password generator
exports.patient_password_generator = () => {
    return `${Math.random().toString(36).substr(4, 6)}`;
}