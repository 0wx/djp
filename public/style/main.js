let c = 0,
  a = 0,
  b = 0,
  d = 0,
  e = 0;
function clr() {
  document.upload.reset();
}
function tambahMedsos() {
  a++;
  var txtNewInputBox = document.createElement("tr");
  txtNewInputBox.innerHTML = `<td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Detail[${a}][nama]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Detail[${a}][telepon]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Detail[${a}][email]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Detail[${a}][medsos]"/></td>`;
  document.getElementById("medsos-tb").appendChild(txtNewInputBox);
}
function tambahCatatan() {
  b++;
  var txtNewInputBox = document.createElement("tr");
  txtNewInputBox.innerHTML = `<td><input required type="text" class="form-control" size="200" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="catatan[${b}]"/></td>`;
  document.getElementById("catatan").appendChild(txtNewInputBox);
}

function tambahKeluarga() {
  c++;
  var txtNewInputBox = document.createElement("tr");
  txtNewInputBox.innerHTML = `
                    <td><input required type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" size="10" name="keluarga[${c}][nik]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" size="10" name="keluarga[${c}][nama]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" size="10" name="keluarga[${c}][tl]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" size="10" name="keluarga[${c}][tgl]"/></td>
                    <td><input required type="radio" id="jk-l" name="keluarga[${c}][jk]" value="LAKI-LAKI"><label for="jk-l">L</label>&nbsp<input required type="radio" id="jk-p" name="keluarga[${c}][jk]" value="PEREMPUAN"><label for="jk-p">P</label></td>
                    <td>
                        
                        <select required class="custom-select" id="inputGroupSelect01" name="keluarga[${c}][status]">
                          
                          <option value="BELUM KAWIN">Belum Kawin</option>
                          <option value="KAWIN">Kawin</option>
                          <option value="CERAI HIDUP">Cerai Hidup</option>
                          <option value="CERAI MATI">Cerai Mati</option>
                        </select>
                      
                    </td>
                    <td>
                        <select required class="custom-select" id="inputGroupSelect01" name="keluarga[${c}][kel]">
                          
                          <option value="KEPALA KELUARGA">KEPALA KELUARGA</option>
                          <option value="SUAMI">SUAMI</option>
                          <option value="ISTRI">ISTRI</option>
                          <option value="ANAK">ANAK</option>
                          <option value="MENANTU">MENANTU</option>
                          <option value="CUCU">CUCU</option>
                          <option value="ORANG TUA">ORANG TUA</option>
                          <option value="MERTUA">MERTUA</option>
                          <option value="FAMILI LAIN">FAMILI LAIN</option>
                          <option value="PEMBANTU">PEMBANTU</option>
                          <option value="LAINNYA">LAINNYA</option>
                        </select>
                    </td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" size="10" name="keluarga[${c}][pekerjaan]"/></td>
                `;
  document.getElementById("keluarga-tb").appendChild(txtNewInputBox);
}
function tambahKontak() {
  d++;
  var txtNewInputBox = document.createElement("tr");
  txtNewInputBox.innerHTML = `<td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="KontakSaham[${d}][npwp]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="KontakSaham[${d}][nama]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="KontakSaham[${d}][persen]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="KontakSaham[${d}][nilai]"/></td>
                    <td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="KontakSaham[${d}][ket]"/></td>`;
  document.getElementById("kontak-tb").appendChild(txtNewInputBox);
}
function tambahInfo() {
  e++;
  var txtNewInputBox = document.createElement("tr");
  txtNewInputBox.innerHTML = `<td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="tunggakan[${e}][nph]"/></td><td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="tunggakan[${e}][tipe]"/></td><td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="tunggakan[${e}][JSPN]"/></td><td><input required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="tunggakan[${e}][Nilai]"/></td>`;
  document.getElementById("tunggakan-tb").appendChild(txtNewInputBox);
}

function tambah(x) {
  document.getElementById(`space-${x}`).value =
    +document.getElementById(`space-${x}`).value + 1;
}
function res(x) {
  document.getElementById(`space-${x}`).value = 0;
}
function kurang(x) {
  document.getElementById(`space-${x}`).value =
    +document.getElementById(`space-${x}`).value < 1
      ? 0
      : +document.getElementById(`space-${x}`).value - 1;
}
