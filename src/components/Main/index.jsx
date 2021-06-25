
import classes from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'

export function Main(props) {
  
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Headline
          page={ props.page}>
          code={<code className={classes.code}>pages/{ props.page }.js</code>}
        </Headline>
        <Links />
      </main>

    </div>
  )
}
