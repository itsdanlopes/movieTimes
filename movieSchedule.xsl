<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <table id="movieTable" border="1" class="indent">
            <thead>
                <tr>
                    <th colspan="6">Dublin Cinema - Showing Time</th>
                </tr>
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Showing Time</th>
                    <th>Duration</th>
                    <th>Screen Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/movies/title">
                    <tr>
                        <td colspan="6">
                            <xsl:value-of select="@genre" />
                        </td>
                    </tr>
                    <xsl:for-each select="movie">
                        <tr>
                            <td align="center">
                                <input name="item" type="checkbox" />
                            </td>
                            <td>
                                <xsl:value-of select="name" />
                            </td>
                            <td>
                                <xsl:value-of select="showingTime" />
                            </td>
                            <td>
                                <xsl:value-of select="duration" />
                            </td>
                            <td>
                                <xsl:value-of select="screenType" />
                            </td>
                            <td>
                                <xsl:value-of select="price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>