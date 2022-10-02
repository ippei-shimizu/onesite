function Error({ statusCode }) {
  return (
    <p className="text-lg text-center mt-12 mb-4 font-bold dark:text-slate-100">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error