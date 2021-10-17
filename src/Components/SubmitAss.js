import styled from 'styled-components'
import { useState } from 'react'

const SubmitAss = ({ subject }) => {
  // for onChange event
  const [pdfFile, setPdfFile] = useState(null)
  const [pdfFileError, setPdfFileError] = useState('')

  // for submit event
  const [viewPdf, setViewPdf] = useState(null)

  // onChange
  const fileType = ['application/pdf']
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onloadend = (e) => {
          setPdfFile(e.target.result)
          setPdfFileError('')
        }
      } else {
        setPdfFile(null)
        setPdfFileError('Please select a valid Pdf file...')
      }
    } else {
      console.log('select your file')
    }
  }

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault()
    if (pdfFile !== null) {
      setViewPdf(pdfFile)
    } else {
      setViewPdf(null)
    }
  }

  return (
    <div className='container'>
      <Heading>
        <h2>{subject}</h2>
      </Heading>
      <br></br>
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input
          type='file'
          className='form-control'
          required
          onChange={handlePdfFileChange}
          style={{
            background: 'var(--main-background)',
            color: 'var(--main-color)',
          }}
        ></input>
        {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
        <br></br>
      </form>
    </div>
  )
}

const Heading = styled.div`
  margin-bottom: 2rem;
  color: #970154;
`

export default SubmitAss
