import dummy from "../db/data.json";

export default function Day(){
    //dummy.words
    const day = 1;
    const wordList = dummy.words.filter(word => (
        word.day === 1
    ))

    console.log(wordList);

    return (
        <>
          <table>
            <tbody>
              {dummy.map(word => (
                <tr key={word.id}>
                  <td>{word.eng}</td>
                  <td>{word.kor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }