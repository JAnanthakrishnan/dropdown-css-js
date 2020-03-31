function toggleDropdown(dp_id, arr_id){
    document.getElementById(dp_id).classList.toggle('s-dropdown-opened');
    document.getElementById(arr_id).classList.toggle('s-arr-opened');
}
function setValue(input_id, value)
{
    input = document.getElementById(input_id);
    input.value = value;
    input.click();
}