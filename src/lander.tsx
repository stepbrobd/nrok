import { ExampleQuery } from "./example-query";
import { Link } from "./nav";

export const Lander = () => (
  <>
    <h1 className="text-4xl text-center pt-2 tracking-wide">ɴᴇᴏɢʀᴏᴋ</h1>
    <div className="flex flex-col items-center pt-6 gap-4">
      <span className="text-center">
        <h2 className="text-2xl font-semibold">query examples</h2>
        <Link to="/syntax">
          <span className="text-xs">
            or, learn the query syntax from the ground up
          </span>
        </Link>
      </span>

      <ul className="flex flex-wrap gap-4 justify-evenly pb-4">
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Every query is regex</h3>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query=".printf" />{" "}
              <span className="text-xs">dot is a wildcard</span>
            </li>
            <li>
              <ExampleQuery query="\.printf" />{" "}
              <span className="text-xs">escaped dot is a dot</span>
            </li>
            <li>
              <ExampleQuery query="whom?" />
            </li>
            <li>
              <ExampleQuery query="OR[[:space:]]IMPLIED" />{" "}
              <span className="text-xs">multiline search!</span>
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Filter results by...</h3>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query="file:README test" />{" "}
              <span className="text-xs">
                (or <code>f:</code>)
              </span>
            </li>
            <li>
              <ExampleQuery query="repo:linux test" />{" "}
              <span className="text-xs">
                (or <code>r:</code>)
              </span>
            </li>
            <li>
              <ExampleQuery query="branch:pages test" />{" "}
              <span className="text-xs">
                (or <code>b:</code>)
              </span>
            </li>
            <li>
              <ExampleQuery query="lang:java test" />
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Exclude certain kinds of repositories</h3>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query="fork:no test" />{" "}
              <span className="text-xs">
                (or <code>yes</code>)
              </span>
            </li>
            <li>
              <ExampleQuery query="public:no test" />{" "}
              <span className="text-xs">
                (or <code>yes</code>)
              </span>
            </li>
            <li>
              <ExampleQuery query="archived:no test" />{" "}
              <span className="text-xs">
                (or <code>yes</code>)
              </span>
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Search for symbol definitions</h3>
          <p className="text-xs">
            As identified by <Link to="https://ctags.io">universal-ctags</Link>.
          </p>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query="sym:main" />
            </li>
            <li>
              <ExampleQuery query="sym:Test[A-Z]" />
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Automatic case sensitivity</h3>
          <p className="text-xs">
            If a query is all-lowercase, it is case insensitive by default;
            otherwise it is case-sensitive by default. Change that with{" "}
            <code>case:</code>.
          </p>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query="readme" />
              <span className="text-sm"> vs </span>
              <ExampleQuery query="readme case:yes" />
            </li>
            <li>
              <ExampleQuery query="README" />
              <span className="text-sm"> vs </span>
              <ExampleQuery query="README case:no" />
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">Use double quotes for queries with spaces</h3>
          <p className="text-xs">
            Otherwise each word is parsed as a separate{" "}
            <Link to="/syntax#expressions">expression</Link>.
          </p>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query='"run the test"' />
            </li>
            <li>
              <ExampleQuery query='"goto considered harmful"' />
            </li>
          </ul>
        </li>
        <li className="grow basis-64 max-w-xs">
          <h3 className="text-lg">
            Logically compose <Link to="/syntax#expressions">expressions</Link>
          </h3>
          <span className="text-xs">
            Seriously, read the manual for this one.
          </span>
          <ul className="space-y-1">
            <li>
              <ExampleQuery query="this -without_this" />{" "}
              <span className="text-xs">negate with a leading dash</span>
            </li>
            <li>
              <ExampleQuery query="all of these" />{" "}
              <span className="text-xs">
                expressions are implicitly &apos;and&apos;ed…
              </span>
            </li>
            <li>
              <ExampleQuery query="any or of or these" />{" "}
              <span className="text-xs">…but explicitly &apos;or&apos;ed</span>
            </li>
            <li>
              <ExampleQuery query="(all of these) (any or of or these)" />{" "}
              <span className="text-xs">
                group expressions with parentheses
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </>
);
