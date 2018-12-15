const demoStyles = {
  demoWrapper: {
    display: 'flex',
    width: '800px',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  button: {
    border: '2px solid #aaaaff',
    backgroundColor: '#aaaaff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '4px 8px',
    padding: '6px 12px',
    color: 'white',
    borderRadius: 32,
    fontSize: 16,
    cursor: 'pointer',
    outline: 'none'
  },
  buttonInverted: {
    border: '2px solid #aaaaff',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '4px 8px',
    padding: '6px 12px',
    color: '#aaaaff',
    borderRadius: 32,
    fontSize: 16,
    cursor: 'pointer',
    outline: 'none'
  },
  themeSelect: {
    width: '20%',
    margin: '1%',
    padding: '1%',
    border: '2px solid #aaaaff',
    cursor: 'pointer',
    borderRadius: 4
  }
}

export default demoStyles
