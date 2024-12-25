import { Menu } from "@headlessui/react";
import { RiUser3Line } from "react-icons/ri";
import clsx from "clsx";

export default function UserMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAABDlBMVEX////I7f+U1PMAAAAAGDCw5v8ARWYAO1wndpXK7/+Y2PaPzev29vb6+vqX2PjM8f+Lx+Tw8PDLy8uCu9bAwMDQ9f8AQGJVVVWGwd3e3t6QkJAAEy0AAB47Ozvq6uovLy+zs7MMEhXV1dWFhYWqqqoiIiInOEAALFIACSZzc3MLCwsYJCgdKzFdhppwork9WWVKa3pnZ2cYGBh6r8kvRU83T1tmkqil0+mfn58AKES99P+x0twAM1YAAA8AABdFRUWSuMtTd4kAIkyIoazk9/8AX4MnPE0QGy0UJjkvSV1EcIk6WXUqTmmBp7d3k6UcVnXZ//8ADUEAADJfcYaOlaBYbHJpgYmjrrrR5OxBhaMh9VYRAAARG0lEQVR4nO2ce1viuBrALQVrKRDuF2EA8QKiLWi16FAVvI0L3ubMmdnj9/8iJ23SJmnTiw7unD/O+zy7s8u06a/vNUmTrK39X/6IZAvtXnlnc7/2Zfd4OBwe736p7W/ulHvtQvbPgrXLZ/u1XZEnu7X9s3L7z2Bl2+XtzjEXi8hxZ7vc/qf11zjbH0ZwOTLcP2v8c2Dt7hXfjkGye9X9Z6xb3uar5+Bwz5LDA75Ct8ufDZYt17yPHh6O5qphaJqmWwL/NAx1Pjr0XVcrf6bnFbpfmMcdnIzmhl6v15W8AiVhifUfeQX+phvz0ckBc/2XbuGz0Mo15kkjVdPq9TxC8ouSr9c1TR0x99Q+x7JFWmeHI6ivQCwGUDdGh7Tuiisny+zTZKpWigHm4JU0labbz6yULLtDPPtgpMXRmEd72oi43nBnhUHRppQ2fjeZQzemVLeydNclOhvr9feDYby6Pia6666ELLNNItP4MBmiM0jUbq/A6xodp7UToxRFlrYkjK5knDjNdX67ynadyrk1LuX5z0ukJ6lUShDkiixMJ5OJIKRSk3SC/x750ngLt7jb/T20HTdtaAHmhCgWFgDTp8Xy0ZLl4mkKgCxM+K9S19yEsvM7aK6rjXUe2SQlAFkWhAqYquvXZrW6bkm1al4vn6YQV0jx+BTdjdjtD5NlHbQt1e9pCgSzuAQBVGbLdXOdkar5aEDdwQtSE/+tJdWx6/YHM132yAkCzetpijKBGhOQOafL6+q6X0xpVrH+HggTxYuX15yQOPoY3H4gWgI+UkACKs9ViUNmiTR/tS+D//I2kNcduP3f0drYa890CjhkAphKZgCZpbqlAJByQcqTWpTS+OOac3xt7IlPJSUQsopa5ZmTaG4JEBy8J+Vpp+7AvTsgNvGNap193wkhE6CnhSgNw7nX+5JKXcXP2HwfmpPXxmxdV1JAoNACPY32uYp7A2BVp+Qdzb0rzxXxTXNGa8pEJkqDrvYYak8s/ScCJ8tsQqnP8XPe0d90aiirNYhGyOBzHqO1ZmtuSumahXM1947aeoXuGJUY/xBoNKGyiIe2LqmAfiU2nZRwx+QqLhqOg1MGTWHRwCwqDIhVpywcY9bS6bvioYyuPmRLKIsmg6XrbFFeB1MwcyujOUXHlT/WAKyAJmC2NAqNdTXLorO+Qybp+Qg8iX0v1ukUDdXW4zhDV1yq1HwIGvQ2B0fS0um6FJ6BZxUhGC6vxi5eeHAwomuoD00WnEAwNdivTOdDk7D0DLz302k4j+OhG4WW/eJ3Nk8Y2CbFbOYibbGllUU/mK268DbABITjcl+iCisuo4yzeckg2xNmWyqplA2X1h9DDDv1NSEzLhersDaOfRb1aw1mkGeJWBTT5bXHPuz6crtyHDZac9iqx6EZOLuPLUqhpfxoAlBttupLigjUnaItFssX2Kv0APb9bIJMF1ds1f0wq/Z8MeoPUfulEZukp1IsHRwBWtMfL32JZfMGg8AGqxOrvRA2NIm1x8QBT2SbrbpQUh5JY8m/0e7Xn3HYBCYe9uwn14LRcPfDoF6I42yuTSXDi+YQ5tIpxViXwtlkgTKPEdEhwd42Ih0jrkWhVOxYMBMBbNj73N4Az988Vq2Pwj2u58sfAWgoh1Rfvgaz2XhGP5SNTsFOHgnyOKS2E4LGSx/IplPJSiDhbJDOQOVCCmKjXE45CatcBaw2crnCdWG7Vejoph6BBuXNjpll4DtSI1esOH7JR2OEk1K02gThddGXJDVKb1CqVbPanwc1RCuuhBTHHTsUUAJRSWAHeRuU1NeUYUb4myVfF8vJ18lTsP6poo9yXI2nOJRADmKpTYC+lFpUY7C9TOCVvNLCUdxBYBpBVX5M5Y/At4VsMEdM4rAtYK5Lp4IbAlQeGQdW/KEnEgLSrqM2mPsfo93t69KqEiFsdAJG0TD0o6Hktkfy7iS4QcQ2WQWbQI3263sBKQ4NruauhoNKAoaznriMw5aKYKOKg4KG0r4hV9aO0q14JkVsXxeTaLhoNtqo9rCm5q1bvQ5r0tBIwHrTotkmGrwyFWpTKhqQUTteo6IhzChWAhGww0VrLZWKUhubRlDB73LdzSAmDUV7F1u42iAcMarBczjkbqKbeJWwKEVwidhsEU0JxKglkeNwbVQUYkYp1lw8tkg0OlJRaWC/xKHsNiIXhbsbgosnUe3QDqeMOBmu66nz+cgWrRncOBL5jlCIw6mcYNj2hkJoBsFwK9EaFOANBrak2qFwoOfiZTdHVsXmOlxOtx2OGW5l7JnKPXfIzB0wfxobNYzW7ex7RX9bbdszNCeubiOyW3y4eM2QDJe3O79f6EBFk8+npHjEMunK2AAplfYUKzM1XdxlK1acUFglGwkGO4ns0n3f8pDt88YLhWi4mK4BSB/O7vsO6clflN7mbpjG9beINBLzBaG/uYE69yW4HTa9RVcsV1bDRqqW4RsInn0KW9w2/GxnK2ELg/vTbJVgOKESfXtsNu39bGC2DOoqpec3ceEoNm1VepNff31/+srtZMJucf1fz6/RbXjY/Hr7WJwCYdn/PuF2z+FPuZT03ffRIybbjo9Nzb2LTQbLviQBRJJmwSBaOvvD7MczK2HLqT627tCTe+N03+RFXzJ/rBEciiydToC1v6+l66c4cMCTe4d07i3bnzzGDlusWl9Rodb6/167pYlcSQiw1WtJMnnT9z42t9bn7Jp1TNcsb60vRb9tZQafLF3DN7xlbInRUnCs1IMXmOsg2j8qZGLNX+u9faRSZHtgakoWm/WGwOtr0LxW77BXhVf01ej3lMnY099Hwn1LV7X1iGEWAJV532Iz7Tek4ZDYI8zGo33JrALC7SoL5MH+vmXW7pOTz1jh44VKZXozttEkCQ3XblkyAQ1+20v7kuvlzbQSpjxqRgR92LpiBs9o+l5zA5X/kcd+SfA6+/lwgdEw21qWRrt1rIHYJPPy4ef0NdjvwMwNU1QW2Il8XBhIoAZNukOVJcVBMymxbFB1uLAKwH3pBmaTzpsD8f4GBOlOJmHqLwvO2oa5Gy7c2Teosumv+4tmMpk8x081qYjK3lpCR9ijwwbvGFyc3lQqvFemZ+BQ15Jd89CwfyMfAOucylCRpyOxZZElkyZ+6jXbjGcio+po175ncNGCjud3FnlCJnLRNwb2G28brfJx2fL+lQ3QzS5bSSwSl236xrJJDFsy2by4/yW8+hcWuHpTbIoO+4p4KTuZUvU4nAxuDluDZNLL1r+hG3nbmDKOco2vqp479zVbF3NvpSDuhntInsXw2TN2NJMoeVYf/RKbhCx57lir/4NqZHa3sUH7298Om2RSN1+KLJwsuJkXj2TOPBO+qKKekGBgMhyYfqPR3FCAJYk08Z8NKAbVpuokGumcvrn1kwlYQEyK3O3Yu/ynYWffgxJRHK038OuSbj3ZdBX33VVUVrPY7ohVb19Mr0nRzYfs4imiNvTV6Mq73AEv/aQyHBUNMmgxaqM0991lmW3Y8vYf54fKNU9rllVvmBVx3uzmXxyKJ8qpWVXK224ukj7BDvfkkNwhtg3NUdv0Ox8tOXigjTrxzlp2vWh4xlckMUMZFZwO/GwIzlwgo97qGG3jboJhn/t0/qCFjgZi0kQdIfj3XWCjqpRRnQZgJHAegBX3OLFMkJ1tuIKsmpWXJl9tMBrGruIAZVI1wKTOmGHPZVNcxYHnlr99t2rNLMUB/c5l02Trl8rUrVheX00299wP+DJZ2Zzb840VHEGROtR80SCDe79JSYZ7BmtrsgAMlw3qJLN2W5k5GaTqN2vLGePQkaANuVFqCS4NpN47igNTMcCett4ewe2tNR500KyFePLarUyym191rZ/ApzZc57k7pLJ4VQ3lm8jjXn/4TCpR8h059usbZrPNBQRAoXkznBUNssfb8DcZschdvZLpeOqWoltrjWVw6HUYk2brP9tbAQTscHeoWwpm1/RFXrOKtlFlmSwBxPWqE7DFB0XDkJSQ/Ey2nuLztibz2Ed764cbqG+2K1UWZghacrBnTUfIM+pZw8BIsKR35UkjCR2qXv7FiVL6uablYSQW7qxeApgy+P488g16gjwl6+xwArkKWvOTQZ0RqqgqOpCnD74cQBV7y6gqfIzguBsKhspTPxTNjlRAWRQvwDgL3LXVRhueyPg+UZ9VbvxRahV72tNlGUxI7jWgrsGYMqnJaWAwksGMBAIaz4u7wXvxcC9OJIqD/ThOcvNo7vqpAjSqLkxleUpHAvf+i+mEZIQcDlJvz40WlH+pAT5Mcg98NtrlHiuVDUpm4JVObvzbL39RqQ0N5/l51+NxZKBqrehrcvyNhTOnwh3FplVAuLNBaTYNEqN4WBribbbH4W3DCoHLG5w4ZeHMZ53W290rFQl8tGSLRkNDGLEWvvMzixfhU+GQyM950ZCkaqq03GDYJj+cSPAVBCzinFpBjANBjNpHnsGbF1QGjq85EqzmHQNnELXx/aHFoOEFtJtRuz6zaBGLOKxTLlcfc/q9jFWrDNu6m0D4t13QG6tydVQROr3IjVoZbFVmkW9pHKA5F45hc9H4Fm0x29Hw0l6xHGOzbAFvYBinabgAn3Ot+kKhvYSjiXMaLY2dbT/O3opsD8eqkaPhFgOu6zhwtFHXw9CagwWNhsdWYi3aorZVnd1ZGg1XN5rcJHzui4a7sDgYNJk9005mE4sxtz87GXioU3CJvMatXk2f4hyT8t5kcM9syszpwzhZl5b2tugrrNa+zJFvCG0JVpw3EjgWbbZGOoOGy6i4HX+/fdYpD3sMnFJSv3FUd85Gw50ZlHQH39j9v7nSnlMQ3rHP040Hsc7A1fURJyQQ3DoTCaZ/4DcYsQcH5PBYOW4cOJIp7vI0Z22Qf/AZFs/c4Giocp2t2XrwbM93tbYbNw5cuLKz519n4fL63EfXpIyKTOonm+vsdtGcjtvvxEm6rBS6OIS2NHY7sFLX5peXHjpSG178cdC8vJx7t+en8XY2cfiRs1hcs4pqIuehK83vPdnOjVRLbcxQedC8n5c8ZLmEs2f33QZ1NOfAjRQWzgoK9bR1ScXFOTaqZVISB83BZetU9Z2dkVOcMyd2P3qCTcY9BuZA98BZp6no6l8PzcGAwFVxlDoKGzQf/lJ1/wkteCWZaB0Q8+HTMDJFJ5VsqTkvHTrsZXw/uGgNmlAQG4xS638GrYvB/Zh7dEwu555KUPs4GoRrOLvsxdOSDw5pTzPmo/uHh29J08oi0Nm+PTzcj+aGxtGYhebshhXFo8ZvnSGSbTib2a2lBhw6dNZQqWQd2GQYb4YlWqkUdDZRDi8WsGSz8ZvH1mTbO+7hJod6mkuXwCc25fN1+I97ihOHLK2753N0dlZwwFmhSI5sGul+t4stuZxOjoSpFVdyxFSmt+2eQLQ1Ln2QLpcjJ66Iw+3eig5Jyrbp067GeiLsSBq+pBM6dQRRbYUH1mULPRISMGSN3LuUB682Tqn7N3srPYswWygyB+WN9XxMvFwuT6tMHO4XV35KYqaxwxxjdjLW0lHqg3+f1sYn9G21nd9LagFSaO94DqY7VWERz3ETC/wVJmb1lLl+WNtpf9IJcNlCY+dIZMU6NE8rQRSyqiYFYWE1mzNHq1lytNP4xEMvs5lG+agjemW4tXV4Mp7PVVWdz8cnh1tb/jMHO0flRuZzj5PMFtrFzZrvyVFS2yz+IweFQtPGOHaTiHUA52ca0yOZdqO7zTGuXzpH291G+zNCM1iymUKj2N2sdYZB54MOh53aZrfYKHyylwXxtdEZtEe1qw45KXS3c1U7QmfRtv8Il4MH9VdoN3rFcrnrSLlc7DXaBaivP3xKriNZSJKxBP7xP4L0qfJfvD9LS4srjkgAAAAASUVORK5CYII="
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden md:block text-sm font-medium">
          Shivpal Yadav
        </span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#profile"
              className={clsx(
                "block px-4 py-2 text-sm",
                active ? "bg-gray-100" : ""
              )}
            >
              Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#logout"
              className={clsx(
                "block px-4 py-2 text-sm",
                active ? "bg-gray-100" : ""
              )}
            >
              Sign out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
